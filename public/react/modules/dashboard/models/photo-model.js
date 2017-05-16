import {extendObservable, computed, observable} from 'mobx'

import CommentModel from './comment-model.js'

export default class PhotoModel {
    constructor(attributes) {
        const {comments, ...info} = attributes
        extendObservable(this, attributes)

        if(comments){
            const {items, ...rest} = comments

            this.comments = {
                items: items.map( comment => new CommentModel(comment)),
                ...rest
            }
        }

        extendObservable(this, ...info)
    }

    @observable selected = false

    @computed get href() {
        return `https://vk.com/photo${this.owner_id}_${this.id}`
    }
}