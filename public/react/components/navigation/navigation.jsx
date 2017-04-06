import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Navbar} from 'react-bootstrap'

import Icon from '../react-mdl/icon.jsx'
import Avatar from '../avatar.jsx'
import PositiveBadge from '../react-mdl/positive-badge.jsx'

export default class Navigation extends Component {
    static propTypes = {
        avatar: PropTypes.string,
        requestsCount: PropTypes.number
    }

    render() {
        const {avatar, requestsCount, ...otherProps} = this.props

        return <Navbar inverse collapseOnSelect className="navbar-default nav-header navbar-fixed-top" {...otherProps}>
            <Navbar.Header>
                <Navbar.Brand>
                    <div className="title-container">
                        <Avatar src={avatar || "http://avatars.mitosa.net/ring/sm070.jpg"}/>
                        <div className="site-name">Mommy's Treasure</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>

            <Navbar.Collapse>
                <ul className="nav navbar-nav navbar-right">
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
            </Navbar.Collapse>
        </Navbar>
    }
}