import 'babel-polyfill'
import React, {Component, PropTypes} from 'react'
import {Router, browserHistory} from 'react-router'

export default class App extends Component {

    static propTypes = {
        routes: PropTypes.shape({})
    };

    render() {
        const {routes} = this.props

        return <Router history={browserHistory} routes={routes}/>
    }
}