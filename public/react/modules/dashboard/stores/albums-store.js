import {action, observable} from 'mobx'

import SmartStore from './../../../base/smart-store'
import AlbumModel from '../models/album-model'

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
                this.fetching = false

                this.collection = response.items.map((album) => new AlbumModel({...album}))
                this.notAvailable = !this.collection.length

            }), action(error => {
                this.fetching = false
                this.store.notification.error({error, message: 'Could not retrieve albums.'})

                throw error
            }))
    }
}