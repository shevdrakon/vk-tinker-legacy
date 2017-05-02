import React, {Component, PropTypes} from 'react'

import classNames from 'classnames'

export default class AlbumSelectItem extends Component {
    static propTypes = {
        item: PropTypes.shape(
            {
                aid: PropTypes.any,
                title: PropTypes.string
            }),
        onSelect: PropTypes.func,
        selected: PropTypes.bool
    }

    select = () => {
        const {item} = this.props
        this.props.onSelect(item)
    }

    render(){
        const {item, selected} = this.props
        const className = classNames({
            "modal-select-item": true,
            "selected": selected
        })

        return <li className={className} onClick={this.select}>
            <span>{item.title}</span>
        </li>
    }
}