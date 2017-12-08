import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class PictureCardAlbumTitle extends Component {
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        const {title, ...rest} = this.props

        return <div className="card-album-title" {...rest}>
            {title}
        </div>
    }
}