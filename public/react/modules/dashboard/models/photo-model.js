import {extendObservable} from 'mobx'

export default class PhotoModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }
}