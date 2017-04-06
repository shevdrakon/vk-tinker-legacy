import {extendObservable} from 'mobx'

export default class AlbumModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }
}