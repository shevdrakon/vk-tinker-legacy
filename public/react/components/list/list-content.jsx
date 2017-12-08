import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {propTypes as mPropTypes} from 'mobx-react'
import cn from 'classnames'

import BusyDots from '../busy-dots.jsx'

import ListContentColumn from './list-content-column.jsx'
import ColumnHeader from './list-content-column-header.jsx'
// import ListContentFooter from './list-content-footer.jsx'

const parseColumns = (children) => {
    if (!children || children.length === 0)
        return []

    return children
        .filter(x => x.type === ListContentColumn)
        .map(x => {
            const {children, ...rest} = x.props

            return {
                ...rest,
                name: children
            }
        })
}

// const parseFooter = (children) => {
//     const clones = React.Children.toArray(children)
//     const header = clones.length > 0 && clones.find(x => x.type === ListContentFooter)
//
//     return header ? React.cloneElement(header, {}) : undefined
// }

export default class ListContent extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
        ]),
        busy: PropTypes.bool,
        collection: mPropTypes.arrayOrObservableArray,
        hover: PropTypes.bool,
        className: PropTypes.string,
        headerClassName: PropTypes.string,
        rowTemplate: PropTypes.node,
        rowKeySelector: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ])
    }

    getRowKey(item) {
        const {rowKeySelector} = this.props

        if (typeof rowKeySelector === 'string')
            return item[rowKeySelector]

        if (typeof rowKeySelector === 'function')
            return rowKeySelector(item)

        return undefined
    }

    render() {
        const {headerClassName = 'text-primary', children, hover, collection = [], rowTemplate, busy, className} = this.props
        const columns = parseColumns(children)

        const tableClasses = cn({
            'table-hover': hover
        }, 'table')

        const contentClasses = cn('card-content', className)

        return <div className={contentClasses}>
            <table className={tableClasses}>
                <colgroup>
                    {columns.map((column, index) => {
                        return <col key={index} style={{width: column.width}}/>
                    })}
                </colgroup>

                <thead className={headerClassName}>
                <tr>
                    {columns.map((column, index) => {
                        return <ColumnHeader key={index} column={column}/>
                    })}
                </tr>
                </thead>
                <tbody>
                {collection.map((item) => {
                    return React.cloneElement(rowTemplate, {item, columns, key: this.getRowKey(item)})
                })}
                </tbody>
            </table>
            {busy && <BusyDots/>}
        </div>
    }
}