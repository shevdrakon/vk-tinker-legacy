import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav} from 'react-bootstrap'

import Avatar from './avatar.jsx'

export class Navigation extends Component {
    render() {
        return <Navbar inverse collapseOnSelect className="navbar-default nav-header">
            <Navbar.Header>
                <Navbar.Brand>
                    <div className="title-container">
                        <Avatar src="http://avatars.mitosa.net/ring/sm070.jpg"/>
                        <div className="site-name">Mommy's treasure</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <li><Link to="/dashboard" className="nav-button" activeClassName="active">Dashboard</Link></li>
                    <li><Link to="/blacklist" className="nav-button" activeClassName="active">Black List</Link></li>
                    <li><Link to="/pending" className="nav-button" activeClassName="active">Pending</Link></li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}