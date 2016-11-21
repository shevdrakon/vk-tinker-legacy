import {action, extendObservable} from 'mobx'
import BaseStore from '../../base/base-store'

export default class ApplicationStore extends BaseStore {
    constructor(...args) {
        super(...args)

        action(() => {
            extendObservable(this, {hub: {name: ''}})
        })()
    }
}