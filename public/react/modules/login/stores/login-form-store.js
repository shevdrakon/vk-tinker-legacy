import {action, observable} from 'mobx'

import SmartStore from './../../../base/smart-store'

import vkPopup from '../../../vkapi/vk-popup'

export default class LoginFormStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable access_token = ''
    @observable showLoginButton = false

    get applicationStore() {
        return this.store.application
    }

    @action toggle({value}) {
        this.showLoginButton = value

        if (value) {
            vkPopup({app_id: this.applicationStore.vkAppId}, this.window)
        }
    }

    @action onTokenChange({value}) {
        this.access_token = value
    }

    @action onLogin() {

    }
}