import fetch from 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import {useStrict} from 'mobx'
import {Provider} from 'mobx-react'
import {BrowserRouter as Router} from 'react-router-dom'

import curryServices from './utils/curry-services'
import Ajax from './utils/ajax'

import RootStore from './base/root-store'
import ApplicationService from './modules/application/application-service'

import messageProvider from './utils/message-provider'

require('jquery')

// /* eslint-disable no-undef */
// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update')
//
//     whyDidYouUpdate(React, {include: /^BlacklistList/})
// }
/* eslint-disable no-undef */

const container = document.getElementById('page-container')

let routerKey = 0

const mount = (app) => {
    const Layout = require('./layout/layout').default
    const Routes = require('./routes').default

    const provider = <Provider store={app.store} app={app}>
        <Layout>
            <Router>
                <Routes key={routerKey} app={app}/>
            </Router>
        </Layout>
    </Provider>

    ReactDOM.render(provider, container)
}

export default {
    initialize(config) {
        this.apiUrl = config.apiUrl
        this.ajax = Ajax({fetch})

        const api = this.api = curryServices({
            application: ApplicationService
        }, {ajax: this.ajax, apiUrl: this.apiUrl})

        useStrict(true)

        const getStore = () => {
            return this.store
        }

        this.store = new RootStore({
            application: {
                user: config.user,
                vkAppId: config.vkAppId,
                status: config.status
                // tokenHeader: config.tokenHeader,
                // token: config.token,
            }
        }, {
            location,
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