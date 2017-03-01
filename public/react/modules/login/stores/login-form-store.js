import {action, observable} from 'mobx'

import SmartStore from './../../../base/smart-store'

export default class LoginFormStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable access_token = ''
    @observable showLoginButton = false

    @action toggle({value}) {
        this.showLoginButton = value
    }

    @action onTokenChange({value}) {
        this.access_token = value
    }

    @action onLogin() {

    }
}