import React, {Component, PropTypes} from 'react'
import cn from 'classnames'

import {Button} from 'react-mdl'

export default class PaginationButton extends Component {
    static propTypes = {
        eventKey: PropTypes.number,
        children: PropTypes.node,
        active: PropTypes.bool,
        disabled: PropTypes.bool,
        onSelect: PropTypes.func
    }

    handleClick = () => {
        const {disabled, onSelect, eventKey} = this.props
        if (disabled)
            return

        if (onSelect)
            onSelect({value: eventKey})
    }

    render() {
        const {children, active} = this.props
        const classes = cn({
            'active': active
        })

        return <li className={classes}>
            <Button ripple onClick={this.handleClick}>
                {children}
            </Button>
        </li>
    }
}