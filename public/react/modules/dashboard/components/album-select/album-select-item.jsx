import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Col} from 'react-bootstrap'

import HighlightText from '../../../../components/highlight-text.jsx'

import classNames from 'classnames'

export default class AlbumSelectItem extends Component {
    static propTypes = {
        item: PropTypes.shape(
            {
                aid: PropTypes.any,
                title: PropTypes.string,
                size: PropTypes.number
            }),
        search: PropTypes.string,
        onSelect: PropTypes.func,
        selected: PropTypes.bool
    }

    select = () => {
        const {item} = this.props
        this.props.onSelect(item)
    }

    render() {
        const {item, selected,search} = this.props
        const className = classNames({
            "modal-select-item": true,
            "selected": selected
        })

        return <Col className={className} md={5} sm={8} onClick={this.select}>
            <div className="album-container">
                <div className="album-title">
                    <HighlightText search={search}>
                        {item.title}
                    </HighlightText>
                </div>
                <div className="album-size">{item.size}</div>
            </div>
        </Col>
    }
}