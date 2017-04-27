import React, {Component, PropTypes} from 'react'

import classNames from 'classnames'

export default class ModalDropdownItem extends Component {
    static propTypes = {
        item: PropTypes.shape(
            {
                value: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            }).isRequired,
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
            "modal-dropdown-item": true,
            "selected": selected
        })

        return <div className={className} onClick={this.select}>
            {item.title}
        </div>
    }
}