import {extendObservable, computed} from 'mobx'

export default class GroupModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }

    @computed get hasAdminRight() {
        return this.is_admin === 1
    }
}