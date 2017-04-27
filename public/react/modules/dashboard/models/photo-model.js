import {extendObservable, computed, observable} from 'mobx'

export default class PhotoModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }

    @observable selected = false

    @computed get href() {
        return `https://vk.com/photo${this.owner_id}_${this.id}`
    }
}