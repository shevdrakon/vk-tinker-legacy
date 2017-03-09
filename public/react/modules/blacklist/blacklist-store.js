import {action, observable} from 'mobx'

import BanUserModel from './models/ban-user-model'
import SmartStore from './../../base/smart-store'

export default class BlacklistStore extends SmartStore {
    constructor(initialState = {}, environment) {
        const {collection, ...rest} = initialState
        const items = collection && collection.map((user) => new BanUserModel({...user}))

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

        return this.api.blacklist.get({top, skip})
            .then(action(response => {
                this.fetching = false

                this.total = response.count
                // this.collection = reset ? response.items : [...collection, ...nextCollection]
                this.collection = response.items.map((user) => new BanUserModel({...user}))
                this.skip = skip
                //this.nofetch = nextCollection.length < top

                this.notAvailable = !this.collection.length

            }), action(error => {
                this.fetching = false
                this.store.notification.error({error, message: 'Could not retrieve blacklist.'})

                throw error
            }))
    }

    @action fetchNext() {
        return this.fetch({reset: false})
    }
}