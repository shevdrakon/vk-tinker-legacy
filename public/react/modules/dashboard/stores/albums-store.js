import {action, observable} from 'mobx'

import SmartStore from './../../../base/smart-store'
import AlbumModel from '../models/album-model'

export default class AlbumsStore extends SmartStore {

    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable loading = true
    @observable collection = [{
        id: undefined,
        title: "All albums"
    }]
    @observable count = 0
    @observable selected = this.collection[0]

    get photosStore() {
        return this.store.dashboard.photos
    }

    @action load() {
        return this.fetch()
            .then(action(() => {
                this.loading = false
            }), action(() => {
                this.loading = false
            }))
    }

    @action fetch() {
        this.fetching = true

        return this.api.photos
            .getAlbums()
            .then(action(response => {
                this.fetching = false
                this.collection = [
                    this.collection[0],
                    ...response.items.map((album) => new AlbumModel({...album}))
                ];
                this.count = response.count
            }), action(error => {
                this.fetching = false
                this.store.notification.error({error, message: 'Could not retrieve albums.'})

                throw error
            }))
    }

    @action select(album) {
        this.selected = album

        this.photosStore.fetch()
    }

    getAlbumById(id) {
        const items = this.collection.filter(a => a.id === id)

        return items && items[0]
    }
}