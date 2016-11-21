import $ from 'jquery'
import Application from './application'

// import './../styles/main.scss';

// __webpack_public_path__ = window.APP_CONFIG.cfgSettings.assetsRoot + '/'

__webpack_public_path__ = 'http://localhost:8080/assets/'

const module = {
    start: function (config, callback) {

        const ajaxHeadersExtend = {}

        Object.assign(Application, config || {})
        // _.defaults(Application, config || {});

        // user is not authorized to access hub designer
        // if (!Application.user) {
        //     Application.loggedOut();
        //     return;
        // }

        if (Application.token) {
            ajaxHeadersExtend[Application.tokenHeader] = Application.token
        }

        if (Application.initiatingServiceHeader) {
            ajaxHeadersExtend[Application.initiatingServiceHeader] = Application.applicationId
        }

        $.ajaxSetup({
            headers: ajaxHeadersExtend
        })

        window.App = Application

        Application.initialize()

        if (typeof callback === 'function') {
            callback()
        }
    }
};

module.start(window.APP_CONFIG)

export default module