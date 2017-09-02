import {extendObservable, computed, observable} from 'mobx'

import UserModel from '../../users/user-model'
import RequestInfoModel from './request-info-model'

export default class RequestUserModel extends UserModel {
    constructor(attributes) {
        super(attributes)

        const {request_info, ...rest} = attributes

        if (request_info)
            this.request_info = new RequestInfoModel(request_info)

        extendObservable(this, rest)
    }

    @observable selected = false

    @computed get userLink() {
        return `https://vk.com/${this.domain}`
    }
}