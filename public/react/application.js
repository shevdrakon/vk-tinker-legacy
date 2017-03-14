import fetch from 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import Mobx from 'mobx'
import {Provider} from 'mobx-react'
import {browserHistory, createRoutes, Router} from 'react-router'

import curryServices from './utils/curry-services'
import Ajax from './utils/ajax'

import RootStore from './base/root-store'
import ApplicationService from './modules/application/application-service'

import messageProvider from './utils/message-provider'

require('jquery')

let routerKey = 0

const container = document.getElementById('page-container')

const mount = (app) => {
    const Layout = require('./layout/layout').default
    const routes = require('./routes')

    const provider = <Provider store={app.store}>
        <Layout>
            <Router key={routerKey} history={browserHistory} routes={createRoutes(routes(app))}/>
        </Layout>
    </Provider>

    ReactDOM.render(provider, container)
}

export default {
    initialize(config) {
        this.apiUrl = config.apiUrl
        this.ajax = new Ajax({fetch})

        const api = this.api = curryServices({
            application: ApplicationService
        }, {ajax: this.ajax, apiUrl: this.apiUrl})

        Mobx.useStrict(true)

        const getStore = () => {
            return this.store
        }

        this.store = new RootStore({
            application: {
                user: config.user,
                vkAppId: config.vkAppId
                // tokenHeader: config.tokenHeader,
                // token: config.token,
            }
        }, {
            browserHistory,
            location,
            localStorage: localStorage,
            messageProvider,
            window: window,
            getStore,
            get api() {
                return api
            },
        })

        mount(this)

        /* eslint-disable no-undef */
        if (process.env.NODE_ENV !== 'production') {
            if (module.hot) {
                module.hot.accept([
                    './layout/layout',
                    './routes'
                ], () => {
                    routerKey++
                    mount(this)
                })
            }
        }
        /* eslint-disable no-undef */
    },

    extendServices(services) {
        Object.assign(this.api, curryServices(services, {ajax: this.ajax, apiUrl: this.apiUrl}))
    },

    extendStores(stores, state) {
        this.store.extendWith(stores, state)
    }
}