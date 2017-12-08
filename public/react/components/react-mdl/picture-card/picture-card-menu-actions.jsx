import React, {Component} from 'react'
import PropTypes from 'prop-types'

import IconButton from '../icon-button.jsx'

export default class PictureCardMenuActions extends Component {
    static propTypes = {
        imageLink: PropTypes.string
    }

    render() {
        const {imageLink, ...rest} = this.props

        return <div className="card-menu-actions" {...rest}>
            <a className="card-link" target="_blank" href={imageLink} onClick={this.handleLinkClick}>
                <IconButton>link</IconButton>
            </a>
        </div>
    }
}