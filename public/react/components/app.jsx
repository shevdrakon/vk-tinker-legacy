import React, {Component} from 'react'
import {Link} from 'react-router'

export default class App extends Component {
    render() {
        return <div class="navbar-fixed">
            <nav id="nav_f" class="default_color" role="navigation">
                <div class="container">
                    <div class="nav-wrapper">
                        <a href="#" id="logo-container" class="brand-logo">M'sT</a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="#intro">Service</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <ul id="nav-mobile" class="side-nav">
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