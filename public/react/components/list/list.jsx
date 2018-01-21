import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ListHeader from './list-header.jsx'
import ListContent from './list-content.jsx'
import ListContentColumn from './list-content-column.jsx'

const parseHeader = (children) => {
    const clones = React.Children.toArray(children)
    const header = clones.length > 0 && clones.find(x => x.type === ListHeader)

    return header ? React.cloneElement(header, {}) : undefined
}

export default class List extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
        ]),
        plain: PropTypes.bool,
        rowTemplate: PropTypes.element,
        className: PropTypes.string,
    }

    render() {
        const {children, plain, ...restProps} = this.props
        const clones = React.Children.toArray(children)

        const header = parseHeader(children)
        const restChildren = clones.length > 0 && clones.filter(x => x.type !== ListHeader)

        const classes = cn({'card-plain': plain}, 'card')

        return <div className={classes}>
            {header}
            <ListContent {...restProps}>
                {restChildren}
            </ListContent>
        </div>
    }
}

List.Header = ListHeader
List.Column = ListContentColumn