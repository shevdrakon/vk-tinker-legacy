// const errorLoading = (err) => {
//     app.error(`Dynamic page loading failed: ${err}`)
// }
//
// const loadRoute = (cb) => {
//     return (module) => cb(null, module.default);
// }

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('../../react/components/home/home.jsx').default,
        // childRoutes: [
        //     require('./login'),
        // ]
    }, {
        path: 'login',

        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                const element = require('../../react/components/login/login-form.jsx')
                cb(null, element.default)
            })
        }
    }]
}

module.exports = rootRoute