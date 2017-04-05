import {action, observable, computed} from 'mobx'

import SmartStore from './../../../base/smart-store'

export default class DashboardStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable loading = true

    @observable total = 0
    @observable activePage = 1

    @observable top = 10
    @observable skip = 0
    @observable fetching = false
    @observable nofetch = false
    @observable collection = []
    @observable notAvailable = false

    @computed get pagesCount() {
        return Math.ceil(this.total / this.top)
    }

    get albumsStore() {
        return this.store.dashboard.albums
    }

    @action load() {
        this.albumsStore.load()

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

        return this.api.photos.get({top, skip})
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
}