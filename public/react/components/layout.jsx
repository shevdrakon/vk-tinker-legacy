import 'babel-polyfill'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

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