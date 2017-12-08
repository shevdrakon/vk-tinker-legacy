import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {propTypes as mPropTypes} from 'mobx-react'
import classnames from 'classnames'

import NotAvailable from './list-not-available.jsx'
import NoSearchResults from './list-no-search-result.jsx'
import NoSelected from './list-no-items-selected.jsx'
import Column from './list-column.jsx'
import ColumnHeader from './list-column-header.jsx'
import Row from './list-row.jsx'

const parseColumns = columns => columns.map(column => {
    const {children, ...rest} = column.props
    return {
        ...rest,
        name: children
    }
})

export default class List extends Component {
    static propTypes = {
        collection: mPropTypes.arrayOrObservableArray,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
        ]),
        rowKeySelector: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]),
        hover: PropTypes.bool,
        modal: PropTypes.bool,
        selectable: PropTypes.bool,
        rowTemplate: PropTypes.element,
        orderBy: PropTypes.string,
        orderDir: PropTypes.oneOf(['asc', 'desc']),
        onSortChange: PropTypes.func,
        showHeader: PropTypes.bool,
        className: PropTypes.string,
        bodyClassName: PropTypes.string,
    }

    static defaultProps = {
        noItems: false,
        rowKeySelector: 'id',
        showHeader: true,
        rowTemplate: <Row />
    }

    static Column = Column
    static NotAvailable = NotAvailable
    static NoSearchResults = NoSearchResults
    static NoSelected = NoSelected

    getRowKey(item) {
        const {rowKeySelector} = this.props

        if (typeof rowKeySelector === 'string')
            return item[rowKeySelector]

        if (typeof rowKeySelector === 'function')
            return rowKeySelector(item)

        return undefined
    }

    render() {

        const columns = parseColumns([].concat(this.props.children))
        const {collection, hover, modal, selectable, rowTemplate, showHeader, className, bodyClassName} = this.props
        const {orderBy, orderDir, onSortChange} = this.props
        const classes = classnames({
            'modal-list-table': modal,
            'table-list': true,
            'table-row-hover': hover,
            'table-row-selectable': selectable,
            [className]: className
        })

        const bodyClasses = classnames({
            'table-list-items': true,
            [bodyClassName]: bodyClassName
        })

        const headerClasses = classnames({
            'table-list-no-items': !collection.length
        })

        return <table className={classes}>
            <colgroup>
                {columns.map((column, index) => {
                    return <col key={index} style={{width: column.width}}/>
                })}
            </colgroup>

            {showHeader && <thead className={headerClasses}>
            <tr>
                {columns.map((column, index) => {
                    return <ColumnHeader
                        key={index}
                        column={column}
                        orderBy={orderBy}
                        orderDir={orderDir}
                        onSortChange={onSortChange}/>
                })}
            </tr>
            </thead>}
            <tbody className={bodyClasses}>
            {collection.map((item) => {
                return React.cloneElement(rowTemplate, {item, columns, key: this.getRowKey(item)})
            })}
            </tbody>
        </table>
    }
}
