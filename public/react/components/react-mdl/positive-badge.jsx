import React, {Component, PropTypes} from 'react'
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
            return <Badge badgeContent={count} {...rest}>{children}</Badge>

        return <div className="count-badge">{children}</div>

    }
}