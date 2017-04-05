import {action, observable, computed} from 'mobx'

import RequestUserModel from './models/request-user-model'
import SmartStore from './../../base/smart-store'

export default class RequestsStore extends SmartStore {
    constructor(initialState = {}, environment) {
        const {collection, ...rest} = initialState
        const items = collection && collection.map((user) => new RequestUserModel({...user}))

        super({collection: items, ...rest}, environment)
    }

    @observable loading = true

    @observable total = 0
    @observable top = 10
    @observable skip = 0
    @observable fetching = false
    @observable nofetch = false
    @observable collection = []
    @observable notAvailable = false

    @computed get pagesCount() {
        return Math.ceil(this.total / this.top)
    }

    @action load() {
        return this.fetch().then(action(() => {
            if (this.collection.length === 1) {
                this.store.routing.push(`${this.collection[0].id}/overview`)
            }
            else {
                this.loading = false
            }
        }))
    }

    @action fetch({reset} = {reset: true}) {
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

                this.total = response.count
                // this.collection = reset ? response.items : [...collection, ...nextCollection]
                this.collection = response.items.map((user) => new RequestUserModel({...user}))
                this.skip = skip
                //this.nofetch = nextCollection.length < top

                this.notAvailable = !this.collection.length

            }), action(error => {
                this.fetching = false
                this.store.notification.error({error, message: 'Could not retrieve requests.'})

                throw error
            }))
    }

    @action selectPage({value}) {
        this.activePage = value
        const top = this.top
        const skip = Math.max(value - 1, 0) * this.top

        this.fetching = true

        return this.api.requests.get({top, skip})
            .then(action(response => {
                this.fetching = false

                this.total = response.count
                // this.collection = reset ? response.items : [...collection, ...nextCollection]
                this.collection = response.items.map((user) => new RequestUserModel({...user}))
                this.skip = skip
                //this.nofetch = nextCollection.length < top

                this.notAvailable = !this.collection.length

            }), action(error => {
                this.fetching = false
                this.store.notification.error({error, message: 'Could not retrieve requests.'})

                throw error
            }))
    }


    @action fetchNext() {
        return this.fetch({reset: false})
    }
}