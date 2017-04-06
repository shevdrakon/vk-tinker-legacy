import {action} from 'mobx'

import SmartStore from './../../../base/smart-store'

export default class DashboardStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    get albumsStore() {
        return this.store.dashboard.albums
    }

    get photosStore() {
        return this.store.dashboard.photos
    }

    @action load() {
        this.albumsStore.load()
        this.photosStore.load()
    }
}