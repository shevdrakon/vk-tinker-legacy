import {action, observable} from 'mobx'

import SmartStore from './../../../base/smart-store'

export default class DashboardStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable collapsibleMenuShown = false

    @observable access_token = ''

    get applicationStore() {
        return this.store.application
    }


    @action onMenuClick(){
        this.collapsibleMenuShown = !this.collapsibleMenuShown
    }

}