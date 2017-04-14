import React, {Component, PropTypes} from 'react'
import {Navbar} from 'react-bootstrap'

import Avatar from '../avatar.jsx'
import NavigationMenu from './navigation-menu.jsx'
import NavigationDropdown from './navigation-dropdown.jsx'

export default class Navigation extends Component {
    static propTypes = {
        avatar: PropTypes.string,
        requestsCount: PropTypes.number,
        children: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.instanceOf(NavigationDropdown)
            ])
        )
    }

    render() {
        const {avatar, requestsCount, children, ...otherProps} = this.props

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
                <ul className="nav navbar-nav navbar-filters">
                    {children}
                </ul>
            <NavigationMenu requestsCount={requestsCount}>{children}</NavigationMenu>
            </Navbar.Collapse>
        </Navbar>
    }
}