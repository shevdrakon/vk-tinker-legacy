import React, {Component, PropTypes} from 'react'

import {CardMedia} from 'material-ui/Card'

export default class PictureCardMedia extends Component {
    static propTypes = {
        title: PropTypes.element,
        image: PropTypes.string.isRequired,
        imgLink: PropTypes.string.isRequired,
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