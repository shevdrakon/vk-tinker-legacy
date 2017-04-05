import {extendObservable} from 'mobx'

export default class RequestInfoModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }
}