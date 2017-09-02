import {action, observable, computed} from 'mobx'

import SmartStore from './../../../base/smart-store'
import PhotoModel from '../models/photo-model'

import GroupModel from '../../users/group-model'

export default class PhotosStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable loading = true
    @observable fetching = false
    @observable fetchingFailed = false

    @observable total = 0

    @observable top = 4//12
    @observable skip = 0
    @observable nofetch = false
    @observable collection = []
    @observable notAvailable = false

    get dashboardStore() {
        return this.store.dashboard.form
    }

    get albumsStore() {
        return this.store.dashboard.albums
    }

    @computed
    get selectedCollection() {
        return this.collection.filter(p => p.selected)
    }

    @action
    load() {
        return this.fetch()
            .then(action(() => {
                this.loading = false
            }), action(() => {
                this.loading = false
            }))
    }

    @action
    repeat() {
        this.fetch()
    }

    @action
    fetch({reset} = {reset: true}) {
        const {top} = this
        const skip = reset ? 0 : this.skip + top
        const albumId = this.albumsStore.selected.id
        const showSoldOutOnly = this.dashboardStore.showSoldOutOnly

        if (reset) {
            this.nofetch = false
            this.collection = []
        }

        if (this.nofetch)
            return Promise.resolve()

        this.fetching = true
        this.fetchingFailed = false

        const payload = {top, skip, albumId, soldOutOnly: showSoldOutOnly}

        return this.api.photos.get(payload)
            .then(action(response => {
                this.fetching = false
                this.total = response.count

                const nextCollection = response.items.map((photo) => new PhotoModel({...photo}))

                this.collection = [...this.collection, ...nextCollection]

                this.skip = skip
                this.nofetch = nextCollection.length < top

                this.notAvailable = !this.collection.length

                return response.items

            }), action(error => {
                this.fetching = false
                this.fetchingFailed = true

                this.store.notification.error({error, message: 'Could not retrieve photos.'})

                throw error
            }))
            .then((collection) => {
                const userIds = collection.reduce((previous, photo) => {
                    const userId = photo.user_id

                    if (previous.indexOf(userId) === -1)
                        previous.push(userId)

                    return [...previous]
                }, [])

                this.loadUsersGroups(userIds)
            })
    }

    @action
    loadUsersGroups(userIds) {
        return this.api.photos.getUsersGroups({userIds})
            .then(action(response => {

                const hash = response.reduce((prev, current) => {
                    prev[Number(current.userId)] = current.groups

                    return prev
                }, {})

                this.collection.forEach(p => {
                    const userId = p.user_id
                    if (hash[userId])
                        p.user.groups = hash[userId].map(g => new GroupModel(g))
                })

            }), action(error => {
                this.store.notification.error({error, message: 'Could not retrieve users groups.'})

                throw error
            }))
    }

    @action
    fetchNext() {
        this.fetch({reset: false})
    }

    @action
    toggleSelect({item, selected}) {
        item.selected = selected
    }
}