import {extendObservable, computed} from 'mobx'

import UserModel from './user-model'
import BanInfoModel from './ban-info-model'

export default class BanUserModel extends UserModel {
    constructor(attributes) {
        super(attributes)

        const {ban_info, ...rest} = attributes

        if (ban_info)
            this.ban_info = new BanInfoModel(ban_info)

        extendObservable(this, rest)
    }

    @computed get fullName() {
        return `${this.first_name} ${this.last_name}`
    }
}