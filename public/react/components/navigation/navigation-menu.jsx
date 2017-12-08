import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

import Icon from '../react-mdl/icon.jsx'
import PositiveBadge from '../react-mdl/positive-badge.jsx'

export default class NavigationMenu extends Component {
    static propTypes = {
        requestsCount: PropTypes.number
    }

    render() {
        const {requestsCount} = this.props

        return <ul className="nav navbar-nav">
            <li>
                <Link to="/dashboard" className="nav-button" activeClassName="active">
                    <Icon>dashboard</Icon>Dashboard
                </Link>
            </li>
            <li>
                <Link to="/blacklist" className="nav-button" activeClassName="active">
                    <Icon>pan_tool</Icon>Black List
                </Link>
            </li>
            <li>
                <Link to="/requests" className="nav-button" activeClassName="active">
                    <Icon>person_add</Icon><PositiveBadge count={requestsCount}>Requests</PositiveBadge>
                </Link>
            </li>
        </ul>
    }
}