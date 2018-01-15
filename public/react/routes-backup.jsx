const {toJS} = require('mobx')

const Routes = (app) => {
    /* eslint-disable no-undef */
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.dispose((data) => {
                data.state = toJS(app.store)
            })
        }
    }
    /* eslint-enable no-undef */

    const ensureClient = (routeCallback) => (nextState, cb) => {
        typeof window === 'undefined' ? cb() : routeCallback(nextState, cb)
    }

    const loadComponent = ({rootComponent, stores = {}, services = {}}, nextState, cb) => {
        /* eslint-disable no-undef */
        if (process.env.NODE_ENV !== 'production') {
            if (module.hot && module.hot.data) {
                const state = module.hot.data && module.hot.data.state
                delete module.hot.data.state

                app.extendStores(stores, state)
                app.extendServices(services)
            } else {
                app.extendStores(stores)
                app.extendServices(services)

                rootComponent.load(nextState.params, app.store)
            }
        }
        else {
            app.extendStores(stores)
            app.extendServices(services)

            rootComponent.load(nextState.params, app.store)
        }
        /* eslint-enable no-undef */

        cb(null, rootComponent)
    }

    return {
        path: '/',
        indexRoute: {
            // getComponent: ensureClient((nextState, cb) => {
            // require.ensure(['./modules/hubs/index'], require => {
            //     const {Root, Store, Service} = require('./modules/hubs/index').default
            //     loadComponent({
            //         rootComponent: Root,
            //         stores: {hubs: Store},
            //         services: {hubs: Service}
            //     }, nextState, cb)
            // })
            // })
        },
        childRoutes: [{
            path: 'login',
            getComponent: ensureClient((nextState, cb) => {
                require.ensure(['./modules/login/index'], require => {
                    const {Root, Store, Service} = require('./modules/login/index').default
                    loadComponent({
                        rootComponent: Root,
                        stores: {loginForm: Store},
                        services: {loginForm: Service}
                    }, nextState, cb)
                })
            })
        }, {
            path: 'dashboard',
            getComponent: ensureClient((nextState, cb) => {
                require.ensure(['./modules/dashboard/index'], require => {
                    const {Root, Store, Service} = require('./modules/dashboard/index').default
                    loadComponent({
                        rootComponent: Root,
                        stores: {dashboard: Store},
                        services: {photos: Service}
                    }, nextState, cb)
                })
            })
        }, {
            path: 'blacklist',
            getComponent: ensureClient((nextState, cb) => {
                require.ensure(['./modules/blacklist/index'], require => {
                    const {Root, Store, Service} = require('./modules/blacklist/index').default
                    loadComponent({
                        rootComponent: Root,
                        stores: {blacklist: Store},
                        services: {blacklist: Service}
                    }, nextState, cb)
                })
            })
        }, {
            path: 'requests',
            getComponent: ensureClient((nextState, cb) => {
                require.ensure(['./modules/requests/index'], require => {
                    const {Root, Store, Service} = require('./modules/requests/index').default
                    loadComponent({
                        rootComponent: Root,
                        stores: {requests: Store},
                        services: {requests: Service}
                    }, nextState, cb)
                })
            })
        }, {
            path: 'sample',
            getComponent: ensureClient((nextState, cb) => {
                require.ensure(['./modules/sample/index'], require => {
                    const {Root, Store} = require('./modules/sample/index').default
                    loadComponent({
                        rootComponent: Root,
                        stores: {sample: Store},
                        //services: {}
                    }, nextState, cb)
                })
            })
        }]
    }
}

module.exports = Routes // eslint-disable-line no-undef
