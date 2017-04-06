import {action, observable} from 'mobx'

import SmartStore from './../../../base/smart-store'
import PhotoModel from '../models/photo-model'

export default class PhotosStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable loading = true
    @observable fetching = false
    @observable fetchingFailed = false

    @observable total = 0

    @observable top = 12
    @observable skip = 0
    @observable nofetch = false
    @observable collection = []
    @observable notAvailable = false

    @action load() {
        return this.fetch()
            .then(action(() => {
                this.loading = false
            }), action(() => {
                this.loading = false
            }))
    }

    @action repeat() {
        this.fetch()
    }

    @action fetch({reset} = {reset: true}) {
        const {top} = this
        const skip = reset ? 0 : this.skip + top

        if (reset)
            this.nofetch = false

        if (this.nofetch)
            return Promise.resolve()

        this.fetching = true
        this.fetchingFailed = false

        return this.api.photos.get({top, skip})
            .then(action(response => {
                this.fetching = false

                this.total = response.count

                const nextCollection = response.items.map((user) => new PhotoModel({...user}))
                this.collection = [...this.collection, ...nextCollection]

                this.skip = skip
                this.nofetch = nextCollection.length < top

                this.notAvailable = !this.collection.length

            }), action(error => {
                this.fetching = false
                this.fetchingFailed = true

                this.store.notification.error({error, message: 'Could not retrieve photos.'})

                throw error
            }))
    }

    @action fetchNext() {
        this.fetch({reset: false})
    }
}