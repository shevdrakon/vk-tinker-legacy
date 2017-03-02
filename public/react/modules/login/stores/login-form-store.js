import {action, observable} from 'mobx'

import SmartStore from './../../../base/smart-store'

import vkPopup from '../../../vkapi/vk-popup'

export default class LoginFormStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable access_token = ''

    get applicationStore() {
        return this.store.application
    }

    @action openVkPopup() {
        vkPopup({app_id: this.applicationStore.vkAppId}, this.window)
    }

    @action onTokenChange({value}) {
        this.access_token = value
    }

    @action validate() {
        if (this.access_token.length === 0) {
            this.messageProvider.error('access_token cannot be empty')
        }
    }

    @action onLogin() {

    }
}