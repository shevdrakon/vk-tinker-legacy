import {extendObservable} from 'mobx'

import UserModel from './user-model'

export default class BanInfoModel {
    constructor(attributes) {
        const {admin, ...rest} = attributes

        if (admin)
            this.admin = new UserModel(admin)

        extendObservable(this, rest)
    }
}