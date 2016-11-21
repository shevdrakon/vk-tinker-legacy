module.exports = {
    path: 'login',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const element = require('../../react/components/login/login-form.jsx')
            debugger
            cb(null, element)
        })
    }
}