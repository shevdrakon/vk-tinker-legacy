import {extendObservable} from 'mobx'

import UserModel from './user-model'

export default class RequestInfoModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }
}