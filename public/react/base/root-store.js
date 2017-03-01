import {action, observable, extendObservable} from 'mobx'

import ApplicationStore from '../modules/application/application-store'
// import ErrorStore from '../modules/application/error-store'
import NotificationStore from '../modules/application/notification-store'
// import RoutingStore from '../modules/application/routing-store'

export default class RootStore {
    constructor(initialState, environment) {
        this.environment = environment

        Object.defineProperties(this, {
            environment: {
                value: environment,
                enumerable: false
            },
        })

        this.extendWith({
            application: ApplicationStore,
            // error: ErrorStore,
            notification: NotificationStore,
            // routing: RoutingStore,
        }, initialState)
    }

    extendWith(storeCreators, state) {
        Object.entries(storeCreators).map(action(([name, Store]) => {
            const store = new Store(state && state[name], this.environment)
            extendObservable(this, {
                [name]: this[name] ? store : observable.ref(store)
            })
        }))
    }
}
