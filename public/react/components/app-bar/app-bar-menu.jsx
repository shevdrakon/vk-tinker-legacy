import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-router-dom'

import Icon from '../react-mdl/icon.jsx'
import PositiveBadge from '../react-mdl/positive-badge.jsx'

const AppBarMenu = (props) => {
    const {requestsCount} = props

    return <ul className="app-bar-menu">
        <li>
            <NavLink to="/dashboard" className="nav-button">
                <Icon>dashboard</Icon>
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink to="/blacklist" className="nav-button">
                <Icon>pan_tool</Icon>
                Black List
            </NavLink>
        </li>
        <li>
            <NavLink to="/requests" className="nav-button">
                <Icon>person_add</Icon>
                <PositiveBadge count={requestsCount}>Requests</PositiveBadge>
            </NavLink>
        </li>
    </ul>
}

AppBarMenu.propTypes = {
    requestsCount: PropTypes.number
}

export default AppBarMenu