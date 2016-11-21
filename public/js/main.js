import $ from 'jquery';
import Application from './application';

import './backbone-extensions';
import './../styles/main.scss';

// __webpack_public_path__ = window.APP_CONFIG.cfgSettings.assetsRoot + '/'

var module = {
    start: function (config, callback) {

        var ajaxHeadersExtend = {};

        _.defaults(Application, config || {});

        // user is not authorized to access hub designer
        if (!Application.user) {
            Application.loggedOut();
            return;
        }

        if (!Application.user.permissions.systemHubDesignerAccess) {
            Application.message.error("You do not have permissions to access Hub Designer.");
            return;
        }

        if (Application.token) {
            ajaxHeadersExtend[Application.tokenHeader] = Application.token;
        }

        if (Application.initiatingServiceHeader) {
            ajaxHeadersExtend[Application.initiatingServiceHeader] = Application.applicationId;
        }

        $.ajaxSetup({
            headers: ajaxHeadersExtend
        })

        window.App = Application;

        Application.initialize(HubRouter);

        if (typeof callback === 'function') {
            callback();
        }
    }
};

module.start(window.APP_CONFIG)

export default module;