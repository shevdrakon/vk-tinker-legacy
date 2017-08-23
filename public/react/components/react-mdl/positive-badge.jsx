import React, {Component, PropTypes} from 'react'
import {Badge} from 'react-mdl'


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
        const {count, children,...otherProps} = this.props
        const output = count && count>0 ? <Badge text={count} {...otherProps}>{children}</Badge> : children

        return (
            <div className="count-badge">
                {output}
            </div>
        )
    }
}


