import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CardMedia} from 'material-ui/Card'

export default class PictureCardMedia extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired,
        isSoldOut: PropTypes.bool
    }

    handleLinkClick = (e) => {
        e.stopPropagation()
    }

    render() {
        const {image, ...rest} = this.props

        return <CardMedia image="" className="card-media" {...rest}>
            <img src={image} className="card-image"/>
        </CardMedia>
    }
}