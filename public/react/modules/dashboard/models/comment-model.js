import {extendObservable, computed} from 'mobx'

import UserModel from '../../users/user-model'

export default class CommentModel {
    constructor(attributes) {
        const {user, ...rest} = attributes

        if (user)
            this.user = new UserModel(user)

        extendObservable(this, rest)
    }

    @computed
    get highlightedText() {
        const regexp = /\Bпродан[оа]?\B/gui
        //regexp.unicode = true

        return this.text.replace(regexp, (args) => {
            return `<b>${args}</b>`
        })
    }
}