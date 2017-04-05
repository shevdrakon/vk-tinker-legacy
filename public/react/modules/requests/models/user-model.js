import {extendObservable, computed} from 'mobx'

export default class UserModel {
    constructor(attributes) {
        extendObservable(this, attributes)
    }

    @computed get fullName() {
        return `${this.first_name} ${this.last_name}`
    }
}