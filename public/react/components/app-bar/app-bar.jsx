import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {inject, observer} from 'mobx-react'

import {AppBar as MuiAppBar, Toolbar as MuiToolbar} from 'material-ui'

import IconButton from '../react-mdl/icon-button.jsx'
import Icon from '../react-mdl/icon.jsx'
import Avatar from '../avatar.jsx'
import Menu from './app-bar-menu.jsx'

class AppBar extends Component {
    static propTypes = {
        user: PropTypes.shape({
            photo_50: PropTypes.string
        }),
        status: PropTypes.shape({
            requestsCount: PropTypes.number
        })
    }

    render() {
        const {user: {photo_50}, status: {requestsCount}} = this.props

        return <MuiAppBar position="fixed" color="accent">
            <MuiToolbar className="app-bar-toolbar">
                <div className="app-bar-toolbar__left">
                    <Avatar src={photo_50}/>
                    <div className="site-name">{'Mommy\'s Treasure'}</div>
                </div>

                <div className="app-bar-toolbar__right">
                    <Menu requestsCount={requestsCount}/>
                    <IconButton color="contrast" aria-label="Menu">
                        <Icon>menu</Icon>
                    </IconButton>
                </div>
            </MuiToolbar>
        </MuiAppBar>
    }
}

export default inject(({store: {application: {user, status}}}) => {
    return {user, status}
})(observer(AppBar))