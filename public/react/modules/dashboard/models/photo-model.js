import {extendObservable, computed} from 'mobx'

export default class PhotoModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }

    @computed get href() {
        return `https://vk.com/photo${this.owner_id}_${this.id}`
    }
}