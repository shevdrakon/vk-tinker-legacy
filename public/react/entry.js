import Application from './application'
import '../styles/main.scss'

__webpack_public_path__ = window.APP_CONFIG.cfgSettings.assetsRoot + '/'; // eslint-disable-line no-undef

(() => {
    debugger
    // user is not authorized to access hub designer
    Application.initialize(window.APP_CONFIG)
})()