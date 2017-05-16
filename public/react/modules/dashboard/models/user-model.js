import {extendObservable, computed} from 'mobx'

export default class UserModel {
    constructor(attributes) {
        debugger
        extendObservable(this, attributes)
    }

    @computed get fullName() {
        return `${this.first_name} ${this.last_name}`
    }

    @computed get userLink() {
        return `https://vk.com/${this.domain}`
    }
}