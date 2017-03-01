//import {extendObservable} from 'mobx'

export default class SmartStore {
    constructor(initialState = {}, {api, getStore, messageProvider, browserHistory, window, localStorage}) {
        Object.defineProperties(this, {
            api: {
                value: api,
                enumerable: false
            },
            store: {
                get() { return getStore() },
                enumerable: false
            },
            messageProvider: {
                value: messageProvider,
                enumerable: false
            },
            browserHistory: {
                value: browserHistory,
                enumerable: false
            },
            window: {
                value: window,
                enumerable: false
            },
            localStorage: {
                value: localStorage,
                enumerable: false
            }
        })

        Object.assign(this, initialState)

        // trick: make props observable as soon as object created (used in tests)
       // extendObservable(this, {})
    }
}