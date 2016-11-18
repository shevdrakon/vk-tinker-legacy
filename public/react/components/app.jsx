import React, {Component} from 'react'
import {Link} from 'react-router'

export default class App extends Component {
    render() {
        return <div className="navbar-fixed">
            <nav id="nav_f" className="default_color" role="navigation">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#" id="logo-container" className="brand-logo">M'sT</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#intro">Service</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="#intro">Service</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" class="button-collapse">
                            <i class="mdi-navigation-menu"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    }
}