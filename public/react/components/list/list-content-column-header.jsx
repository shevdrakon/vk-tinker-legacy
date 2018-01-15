import React, {Component} from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

export default class ListColumnHeader extends Component {
    static propTypes = {
        column: PropTypes.shape({
            colSpan: PropTypes.string,
            className: PropTypes.string,
            name: PropTypes.node
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