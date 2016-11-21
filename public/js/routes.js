export default ({app}) => {

    const errorLoading = (err) => {
        app.error(`Dynamic page loading failed: ${err}`)
    }

    const loadRoute = (cb) => {
        return (module) => cb(null, module.default);
    }

    const rootRoute = {
        childRoutes: [{
            path: '/',
            // component: require('./components/App'),
            childRoutes: [
                require('./routes/login'),
            ]
        }]
    }

    debugger

    // const T = {
    //     // component: App,
    //     path: '/',
    //     getComponent(location, cb) {
    //         require.ensure([], (require) => {
    //             const element = require('../react/components/login/login-form.jsx')
    //             debugger
    //             cb(null, element)
    //         })
    //
    //         // System.import('pages/Home')
    //         //     .then(loadRoute(cb))
    //         //     .catch(errorLoading);
    //     }
    // }


    return rootRoute
}