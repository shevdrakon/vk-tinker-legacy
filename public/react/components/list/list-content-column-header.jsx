import React from 'react'
import classnames from 'classnames'

export default class ListColumnHeader extends React.Component {
    static propTypes = {
        column: React.PropTypes.shape({
            colSpan: React.PropTypes.string,
            className: React.PropTypes.string,
            name: React.PropTypes.node
        })
    }

    render() {
        const {column: {name, colSpan, className}} = this.props
        const classes = classnames({
            [className]: className
        })

        return <th colSpan={colSpan} className={classes}>
            {name}
        </th>
    }
}