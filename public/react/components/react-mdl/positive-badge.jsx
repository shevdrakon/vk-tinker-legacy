import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Badge} from 'material-ui'

export default class PositiveBadge extends Component {
    static propTypes = {
        count: PropTypes.number,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
            PropTypes.string
        ])
    }

    render(){
        const {count, children, ...rest} = this.props
        const positive = count && count> 0

        if (positive)
            return <Badge color="primary" badgeContent={count} {...rest}>{children}</Badge>

        return <div className="count-badge">{children}</div>

    }
}