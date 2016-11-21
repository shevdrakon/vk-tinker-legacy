import {inject} from 'mobx-react'

export default (selector) => {
    return inject(({store}) => {
        /* istanbul ignore next */
        return selector(store.get())
    })
}