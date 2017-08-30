import {extendObservable, computed} from 'mobx'

export default class UserModel {
    constructor(attributes) {
        extendObservable(this, attributes, {groups: []})
    }

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
    get hasGroupWithAdminRights() {
        return this.hasGroups //? !!this.groups.find(g => g.hasAdminRight) : false
    }
}