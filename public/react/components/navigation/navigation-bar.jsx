import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar} from 'react-bootstrap'

import CurrentUserAvatar from '../current-user-avatar.jsx'
import Icon from '../react-mdl/icon.jsx'

export class Navigation extends Component {
    render() {
        return <Navbar inverse collapseOnSelect className="navbar-default nav-header navbar-fixed-top">
            <Navbar.Header>
                <Navbar.Brand>
                    <div className="title-container">
                        <CurrentUserAvatar/>
                        <div className="site-name">Mommy's Treasure</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/dashboard" className="nav-button" activeClassName="active"><Icon>dashboard</Icon>Dashboard</Link>
                    </li>
                    <li><Link to="/blacklist" className="nav-button" activeClassName="active"><Icon>pan_tool</Icon>Black
                        List</Link></li>
                    <li><Link to="/pending" className="nav-button" activeClassName="active"><Icon>person_add</Icon>Pending</Link>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    }
}