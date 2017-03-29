import {action, observable, computed} from 'mobx'

import SmartStore from './../../../base/smart-store'

export default class AlbumsStore extends SmartStore {

    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable loading = true
    @observable collection = []

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

    @action fetch() {
        this.fetching = true

        return this.api.photos.getAlbums()
            .then(action(response => {
                debugger
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