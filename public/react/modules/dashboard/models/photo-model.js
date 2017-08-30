import {extendObservable, computed, observable} from 'mobx'

import UserModel from './user-model.js'
import CommentModel from './comment-model.js'

export default class PhotoModel {
    constructor(attributes) {
        const {user, comments, ...rest} = attributes

        this.user = new UserModel(user)
        this.comments = comments ? comments.map(c => new CommentModel(c)) : []

        extendObservable(this, rest)
    }

    @observable selected = false

    @computed get href() {
        return `https://vk.com/photo${this.owner_id}_${this.id}`
    }

    @computed get hasComments() {
        return this.comments && this.comments.length
    }

    @computed get isSoldOut () {
        return this.hasComments ? !!this.comments.find(c => c.hasSoldOutText) : false
    }
}