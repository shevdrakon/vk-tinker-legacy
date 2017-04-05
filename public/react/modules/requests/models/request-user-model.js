import {extendObservable, computed} from 'mobx'

import UserModel from './user-model'
import RequestInfoModel from './request-info-model'

export default class RequestUserModel extends UserModel {
    constructor(attributes) {
        super(attributes)

        const {request_info, ...rest} = attributes

        if (request_info)
            this.request_info = new RequestInfoModel(request_info)

        extendObservable(this, rest)
    }

    @computed get fullName() {
        return `${this.first_name} ${this.last_name}`
    }

    @computed get userLink() {
        return `https://vk.com/${this.domain}`
    }
}