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
        selected: PropTypes.bool,
        children: PropTypes.node
    }

    select = () => {
        const {item} = this.props
        this.props.onSelect(item)
    }

    render(){
        const {children, selected} = this.props
        const className = classNames({
            "modal-select-item": true,
            "selected": selected
        })

        return <li className={className} onClick={this.select}>
            {children}
        </li>
    }
}