import {observable, extendObservable, computed} from 'mobx'

export default class UserModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }

    @observable first_name = ''
    @observable last_name = ''
    @observable domain = ''
    @observable groups = []

    @computed
    get fullName() {
        return `${this.first_name} ${this.last_name}`
    }

    @computed
    get userLink() {
        return `https://vk.com/${this.domain}`
    }

    @computed
    get hasGroups() {
        return this.groups && this.groups.length
    }

    @computed
    get groupsWithAdminRights() {
        return this.hasGroups ? this.groups.filter(g => g.hasAdminRight) : []
    }

    @computed
    get hasGroupWithAdminRights() {
        return !!this.groupsWithAdminRights.length
    }
}