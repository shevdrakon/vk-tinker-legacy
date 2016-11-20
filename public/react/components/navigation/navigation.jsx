import React, {Component} from 'react'
import {Link} from 'react-router'

import NavigationItems from './navigation-items.jsx'
import NavigationMobileItems from './navigation-mobile-items.jsx'

export default class Navigation extends Component {
    render() {
        return <div className="navbar-fixed">
            <nav id="nav_f" className="default_color" role="navigation">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link id="logo-container" className="brand-logo" to="/">M'sT</Link>

                        <NavigationItems>
                            <Link to="/admin">Admin</Link>
                            <Link to="#work">Work</Link>
                            <Link to="#team">Team</Link>
                            <Link to="#contact">Contact</Link>
                        </NavigationItems>

                        <NavigationMobileItems>
                            <Link to="#intro">Service</Link>
                            <Link to="#work">Work</Link>
                            <Link to="#team">Team</Link>
                            <Link to="#contact">Contact</Link>
                        </NavigationMobileItems>

                        <a href="#" data-activates="nav-mobile" className="button-collapse">
                            <i className="mdi-navigation-menu"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    }
}