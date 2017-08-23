import React, {Component, PropTypes} from 'react'
import {CardTitle, IconButton, CardMenu} from 'react-mdl'
import classNames from 'classnames'

import Icon from '../icon.jsx'

const validationIcons = {
    'done': 'check_circle',
    'warning': 'help',
    'bad': 'warning'
}

export default class PictureCardHeader extends Component {
    static propTypes = {
        imgSrc: PropTypes.string.isRequired,
        imgLink: PropTypes.string.isRequired,
        imgValidation: PropTypes.oneOf(['done', 'warning', 'bad']),
        isSoldOut: PropTypes.bool
    }

    handleLinkClick = (e) => {
        e.stopPropagation()
    }

    render() {
        const {imgSrc, imgLink, imgValidation, isSoldOut, ...otherProps} = this.props
        const hasValidation = imgValidation && imgValidation.length > 0
        const validationClass = classNames('card-validation', imgValidation)
        const validationIcon = hasValidation && validationIcons[imgValidation]

        return <CardTitle className="card-title" {...otherProps}>
            <img src={imgSrc} className="card-image"/>
            <CardMenu className="card-menu">
                <a className="card-link" target="_blank" href={imgLink} onClick={this.handleLinkClick}>
                    <IconButton name="link" className="card-menu-icon"/>
                </a>
                {isSoldOut && <Icon className="sold-out">monetization_on</Icon>}
            </CardMenu>
            {hasValidation && <Icon className={validationClass}>{validationIcon}</Icon>}
        </CardTitle>
    }
}