import $ from 'jquery';

import toastr from 'toastr';
import 'toastr/toastr.scss';

// import ErrorHandlerMixin from 'mixins/error-handler'

import fetch from 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import Mobx from 'mobx'
import {Provider} from 'mobx-react'

import curryServices from '../react/utils/curry-services'
import Ajax from '../react/utils/ajax'
import storeCreators from '../react/utils/store-creators'
import storeHolder from '../react/utils/store-holder'

import ApplicationStore from '../react/modules/application/application-store'
import ApplicationService from '../react/modules/application/application-service'

import Layout from '../react/components/layout.jsx'
import Routes from './routes'

export default {
    currentView: null,
    router: null,
    currentHubId: '',

    initialize: function () {
        // this.router = Routes({app:this})

        this.baseUrl = '' //window.APP_CONFIG.cfgSettings.apiBaseUrl
        this.ajax = new Ajax({
            fetch,
            //tokenHeader: window.App.tokenHeader,
            //token: window.App.token,
            //initiatingServiceHeader: window.App.initiatingServiceHeader,
            //initiatingService: window.App.applicationId,
        })

        const api = this.api = curryServices(
            {application: ApplicationService},
            {ajax: this.ajax, baseUrl: this.baseUrl})

        Mobx.useStrict(true)

        const getStore = () => {
            return this.storeHolder.get()
        }

        this.storeCreators = storeCreators({
            application: ApplicationStore
        })

        this.storeHolder = storeHolder({
            application: {
                //tokenHeader: window.App.tokenHeader,
                //token: window.App.token
            }
        }, {
            // router: this.router,
            localStorage: localStorage,
            //messageProvider: window.App.message,
            //helpProvider: window.App,
            //errorHandler: ErrorHandlerMixin,
            window: window,
            get api() {
                return api
            },
            getStore
        })
        this.storeHolder.extend(this.storeCreators.get())

        const routes = Routes({app: this})
        const provider = <Provider store={this.storeHolder}>
            <Layout routes={routes}/>
        </Provider >

        ReactDOM.render(provider, document.getElementById('root'))
    },

    navigate: function (url) {
        location.href = url;
    },

    title: function (title) {
        $('title').text(title);
    },

    extendStores(storeCreators) {
        this.storeCreators.extend(storeCreators)
        this.storeHolder.extend(this.storeCreators.get())
    },

    extendServices(services) {
        Object.assign(this.api, curryServices(services, {ajax: this.ajax, baseUrl: this.baseUrl}))
    },

    unmountComponent() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    },

    showComponent(element, {reset}) {
        if (reset)
            this.storeHolder.extend(this.storeCreators.get(), {replace: true})

        const provider = <Provider store={this.storeHolder}>
            <Layout>{element}</Layout>
        </Provider >

        ReactDOM.render(provider, document.getElementById('root'))

        return this.storeHolder
    },

    // showMainView(view) {
    //     this.closeMainView()
    //     this.unmountComponent()
    //
    //     $('#page-container').html(view.render().el);
    //
    //     // needed to make IE undock menu, scroll event is not fired in IE when page dimensions change
    //     window.scroll(0, 0);
    //
    //     this.currentView = view;
    //     return view;
    // },

    message: (function () {
        const _showMessage = function (msg, type, timeout) {
            toastr[type](escape(msg), '', {
                timeOut: timeout,
                positionClass: 'toast-top-full-width'
            });
        };

        return {
            success: function (msg, timeout) {
                _showMessage(msg, 'success', timeout || 2000);
            },
            error: function (msg, timeout) {
                _showMessage(msg, 'error', timeout || 4000);
            },
            warning: function (msg, timeout) {
                _showMessage(msg, 'warning', timeout || 4000);
            }
        };
    }())
};