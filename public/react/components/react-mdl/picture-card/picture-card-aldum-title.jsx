import React, {Component, PropTypes} from 'react'

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