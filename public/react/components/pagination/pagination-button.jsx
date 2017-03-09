import React, {Component, PropTypes} from 'react'
import cn from 'classnames'

import {Button} from 'react-mdl'

export default class PaginationButton extends Component {
    static propTypes = {
        children: PropTypes.node,
        active: PropTypes.bool
    }

    render() {
        const {children, active} = this.props
        const classes = cn({
            'active': active
        })

        return <li className={classes}>
            <Button ripple>{children}</Button>
        </li>
    }
}