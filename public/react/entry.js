import Application from './application'
import '../styles/main.scss'

// __webpack_public_path__ = window.APP_CONFIG.cfgSettings.assetsRoot + '/'; // eslint-disable-line no-undef

(() => {
    debugger
    Application.initialize(window.APP_CONFIG)
})()