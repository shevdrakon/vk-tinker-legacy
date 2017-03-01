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
import HubsService from './modules/hubs/hubs-service'
import HubOverviewService from './modules/hub-overview/hub-overview-service'

import messageProvider from './utils/message-provider'

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
        this.baseUrl = config.cfgSettings.apiBaseUrl
        this.ajax = new Ajax({fetch})

        const api = this.api = curryServices({
            application: ApplicationService,
            hubs: HubsService,
            hubOverview: HubOverviewService,
        }, {ajax: this.ajax, baseUrl: this.baseUrl})

        Mobx.useStrict(true)

        const getStore = () => {
            return this.store
        }
        this.store = new RootStore({
            application: {
                tokenHeader: config.tokenHeader,
                token: config.token,
                applications: config.applications,
                user: config.user,
                daysToKeepHubData: config.cfgSettings.daysToKeepHubData,
                helpUrl: config.cfgSettings.helpUrl,
                authoringHost: config.cfgSettings.authoringHost,
                siteRoot: config.cfgSettings.siteRoot,
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

        this.store.globalNavigation.fetchRecentHubsInfo()
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
        Object.assign(this.api, curryServices(services, {ajax: this.ajax, baseUrl: this.baseUrl}))
    },

    extendStores(stores, state) {
        this.store.extendWith(stores, state)
    },
}