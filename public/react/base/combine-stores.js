import {observable, extendObservable} from 'mobx'

export default (initialState, environment) => stores => {
    return Object.entries(stores).reduce((result, [name, Store]) => {
        const store = new Store(initialState && initialState[name], environment)
        extendObservable(result, {
            [name]: observable.ref(store)
        })
        return result
    }, {})
}