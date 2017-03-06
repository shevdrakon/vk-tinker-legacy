import {action, observable} from 'mobx'

import SmartStore from './../../base/smart-store'

import vkPopup from '../../vkapi/vk-popup'

export default class LoginFormStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable access_token = ''
    @observable logging = false

    get applicationStore() {
        return this.store.application
    }

    @action openVkPopup() {
        vkPopup({app_id: this.applicationStore.vkAppId}, this.window)
    }

    @action onTokenChange({value}) {
        this.access_token = value
    }

    @action validateAndLogin() {
        const isValid = this.access_token.length > 0

        if (!isValid) {
            this.messageProvider.error('access_token cannot be empty')
        }
        else {
            this.tryToLogin()
        }
    }

    @action tryToLogin() {
        const service = this.api.loginForm

        this.logging = true

        return service.tryToLogin({access_token: this.access_token})
            .then(action(() => {
                this.logging = false

                // this.mainStore.updateHub({
                //     ...this.hub
                // })
            }), action(error => {
                this.logging = false

                this.messageProvider.error(`Could not retrieve account info. Is access_token valid? (status code: ${error.status})`)
                throw error
            }))
    }

    @action onLogin() {

    }
}