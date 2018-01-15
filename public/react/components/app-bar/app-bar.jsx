import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {AppBar as MuiAppBar, Toolbar} from 'material-ui'

import IconButton from '../react-mdl/icon-button.jsx'
import Icon from '../react-mdl/icon.jsx'
import Avatar from '../avatar.jsx'
import Menu from './app-bar-menu.jsx'

export default class AppBar extends Component {
    static propTypes = {}

    render() {
        const avatar = undefined

        return <MuiAppBar position="fixed" color="accent">
            <Toolbar className="app-bar-toolbar">
                <div className="app-bar-toolbar__left">
                    <Avatar src={avatar || "http://avatars.mitosa.net/ring/sm070.jpg"}/>
                    <div className="site-name">{'Mommy\'s Treasure'}</div>
                </div>

                <div className="app-bar-toolbar__right">
                    <Menu/>
                    <IconButton color="contrast" aria-label="Menu">
                        <Icon>menu</Icon>
                    </IconButton>
                </div>
            </Toolbar>
        </MuiAppBar>
    }
}