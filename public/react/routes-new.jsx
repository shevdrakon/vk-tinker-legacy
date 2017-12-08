import React, {Component} from 'react'
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
}

const Login = (props) => (
    <Bundle load={(cb) => require.ensure(['./modules/login/index'], require => cb(require('./modules/login/index')))}>
        {(Login) => <Login {...props} />}
    </Bundle>
)

const Dashboard = () => (
    <div>Dashboard here</div>
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
        </div>
    )
}

export default Routes