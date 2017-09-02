import {action, observable, computed} from 'mobx'

import RequestUserModel from './models/request-user-model'
import SmartStore from './../../base/smart-store'

import GroupModel from '../users/group-model'

export default class RequestsStore extends SmartStore {
    constructor(initialState = {collection: []}, environment) {
        const {collection, ...rest} = initialState
        const items = collection && collection.map((user) => new RequestUserModel({...user}))

        super({collection: items, ...rest}, environment)
    }

    @observable loading = true

    @observable top = 10
    @observable skip = 0
    @observable fetching = false
    @observable nofetch = false
    @observable collection = []
    @observable notAvailable = false
    @observable activePage = 1

    @computed
    get pagesCount() {
        const total = this.store.application.status.requestsCount
        return Math.ceil(total / this.top)
    }

    @computed
    get isAllSelected() {
        return this.collection.length > 0 && this.collection.length === this.selectedCollection.length
    }

    @computed
    get selectedCollection() {
        return this.collection.filter(r => r.selected)
    }

    @action
    load() {
        return this.fetch()
            .then(action(() => {
                this.loading = false
            }))
    }

    @action
    fetch({reset} = {reset: true}) {
        const {top} = this
        const skip = reset ? 0 : this.skip + top

        if (reset)
            this.nofetch = false

        if (this.nofetch)
            return Promise.resolve()

        this.fetching = true

        return this.api.requests.get({top, skip})
            .then(action(response => {
                this.fetching = false

                this.store.application.status.requestsCount = response.count
                // this.collection = reset ? response.items : [...collection, ...nextCollection]
                this.collection = response.items.map((user) => new RequestUserModel({...user}))
                this.skip = skip
                //this.nofetch = nextCollection.length < top

                this.notAvailable = !this.collection.length

                return response.items
            }), action(error => {
                this.fetching = false
                this.store.notification.error({error, message: 'Could not retrieve requests.'})

                throw error
            }))
            .then(collection => {
                const userIds = collection.map(u => u.id)

                //this.loadUsersGroups(userIds)
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

                this.collection.forEach(u => {
                    const userId = u.id
                    if (hash[userId])
                        u.groups = hash[userId].map(g => new GroupModel(g))
                })

            }), action(error => {
                this.store.notification.error({error, message: 'Could not retrieve users groups.'})

                throw error
            }))
    }

    @action
    selectPage({value}) {
        this.activePage = value
        const top = this.top
        const skip = Math.max(value - 1, 0) * this.top

        this.fetching = true

        return this.api.requests.get({top, skip})
            .then(action(response => {
                this.fetching = false

                this.store.application.status.requestsCount = response.count
                // this.collection = reset ? response.items : [...collection, ...nextCollection]
                this.collection = response.items.map(user => new RequestUserModel({...user}))
                this.skip = skip
                //this.nofetch = nextCollection.length < top

                this.notAvailable = !this.collection.length

            }), action(error => {
                this.fetching = false
                this.store.notification.error({error, message: 'Could not retrieve requests.'})

                throw error
            }))
    }

    @action
    fetchNext() {
        return this.fetch({reset: false})
    }

    @action
    toggleSelect({item, selected}) {
        item.selected = selected
    }

    @action
    toggleSelectAll() {
        const selected = !this.isAllSelected
        this.collection.forEach(item => this.toggleSelect({item, selected}))
    }

    @action
    approveSelected() {
        const users = this.selectedCollection.map(user => user.id)
        this.api.requests.approve({users}).then(action(response => {
            this.store.notification.success(`${response.approved} approved, ${response.rejected} rejected`)
        }))

        this.collection = this.collection.filter(r => !r.selected)
        this.load()
    }
}