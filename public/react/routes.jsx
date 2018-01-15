import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {toJS} from 'mobx'
import {Route} from 'react-router-dom'

class Bundle extends Component {
    state = {
        mod: null
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({mod: null})

        props.load(mod => {
            this.setState({mod: mod.default ? mod.default : mod})
        })

        //     // loadComponent({
        //     //     rootComponent: Root,
        //     //     stores: {loginForm: Store},
        //     //     services: {loginForm: Service}
        //     // }, nextState, cb)
    }

    render() {
        const {mod} = this.state

        return mod ? this.props.children(mod) : null
    }

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.node,
            PropTypes.func
        ]),
        load: PropTypes.func
    }
}

const Login = (props) => (
    <Bundle load={(cb) => require.ensure(['./modules/login/index'], require => cb(require('./modules/login/index')))}>
        {(Login) => <Login {...props} />}
    </Bundle>
)

const Dashboard = () => (
    <div>todo Dashboard here</div>
)

const Blacklist = (props) => (
    <Bundle load={(cb) => require.ensure(['./modules/blacklist/index'], require => cb(require('./modules/blacklist/index')))}>
        {(Blacklist) => <Blacklist {...props} />}
    </Bundle>
)

const Requests = () => (
    <div>todo Requests here</div>
)

const Routes = ({app}) => {

    /* eslint-disable no-undef */
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.dispose((data) => {
                data.state = toJS(app.store)
            })
        }
    }
    /* eslint-enable no-undef */

    return (
        <div>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/blacklist" component={Blacklist}/>
            <Route path="/requests" component={Requests}/>
        </div>
    )
}

Routes.propTypes = {
    app: PropTypes.object
}

export default Routes