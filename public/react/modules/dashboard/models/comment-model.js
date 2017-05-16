import {extendObservable} from 'mobx'

import UserModel from './comment-model.js'

export default class CommentModel {
    constructor(attributes) {
        const {user, ...rest} = attributes

        if(user)
            this.user = new UserModel(user)

        extendObservable(this, rest)
    }
}