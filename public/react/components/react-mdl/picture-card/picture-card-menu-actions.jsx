import React, {Component, PropTypes} from 'react'

import Icon from '../icon.jsx'
import IconButton from '../icon-button.jsx'

export default class PictureCardMenuActions extends Component {
    static propTypes = {
        imageLink: PropTypes.string,
        isSoldOut: PropTypes.bool
    }

    render() {
        const {imageLink, isSoldOut, ...rest} = this.props

        return <div className="card-menu-actions" {...rest}>
            <a className="card-link" target="_blank" href={imageLink} onClick={this.handleLinkClick}>
                <IconButton>link</IconButton>
            </a>
            {isSoldOut && <Icon className="sold-out">monetization_on</Icon>}
        </div>
    }
}