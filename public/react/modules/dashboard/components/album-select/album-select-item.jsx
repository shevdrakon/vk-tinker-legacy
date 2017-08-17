import React, {Component, PropTypes} from 'react'
import {Col} from 'react-bootstrap'

import classNames from 'classnames'

export default class AlbumSelectItem extends Component {
    static propTypes = {
        item: PropTypes.shape(
            {
                aid: PropTypes.any,
                title: PropTypes.string,
                size: PropTypes.number
            }),
        onSelect: PropTypes.func,
        selected: PropTypes.bool
    }

    select = () => {
        const {item} = this.props
        this.props.onSelect(item)
    }

    render() {
        const {item, selected} = this.props
        const className = classNames({
            "modal-select-item": true,
            "selected": selected
        })

        return <Col className={className} md={5} sm={8} onClick={this.select}>
            <div className="album-container">
                <div className="album-title">{item.title}</div>
                <div className="album-size">{item.size}</div>
            </div>
        </Col>
    }
}