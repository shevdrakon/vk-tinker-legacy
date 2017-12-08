export default class SmartStore {
    constructor(initialState = {}, {api, getStore, messageProvider, browserHistory, window}) {
        Object.defineProperties(this, {
            api: {
                value: api,
                enumerable: false
            },
            store: {
                get() {
                    return getStore()
                },
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
            }
        })

        Object.assign(this, initialState)
    }
}