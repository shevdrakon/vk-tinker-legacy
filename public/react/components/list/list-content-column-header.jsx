import React from 'react'
import classnames from 'classnames'

export default class ListColumnHeader extends React.Component {
    static propTypes = {
        column: React.PropTypes.shape({
            colSpan: React.PropTypes.string,
            className: React.PropTypes.string,
            name: React.PropTypes.node,
            orderBy: React.PropTypes.string,
            orderDir: React.PropTypes.oneOf(['asc', 'desc']),
        }),
        orderBy: React.PropTypes.string,
        orderDir: React.PropTypes.oneOf(['asc', 'desc']),
        onSortChange: React.PropTypes.func
    };

    handleClick = () => {
        const {column, orderBy, onSortChange} = this.props
        const orderDir = this.props.orderDir || 'asc'
        const columnOrderBy = column.orderBy
        const columnOrderDir = column.orderDir || 'asc'

        if (!columnOrderBy) return

        const nextOrderBy = columnOrderBy;
        const nextOrderDir =
            columnOrderBy === orderBy ?
                (orderDir === 'asc' ? 'desc' : 'asc') :
                columnOrderDir

        onSortChange && onSortChange({
            orderBy: nextOrderBy,
            orderDir: nextOrderDir
        })
    }

    render() {
        const {column, column: {name, colSpan, className}, orderBy} = this.props
        const orderDir = this.props.orderDir || 'asc'
        const columnOrderBy = column.orderBy
        const orderByClasses = classnames({
            'sort-up': columnOrderBy === orderBy && orderDir === 'desc',
            'sort-down': columnOrderBy === orderBy && orderDir === 'asc'
        })
        const classes = classnames({
            'sortable': !!columnOrderBy,
            [className]: className,
            'sorted': columnOrderBy === orderBy
        })

        return <th colSpan={colSpan} className={classes} onClick={this.handleClick}>
            {name}
            {columnOrderBy ? <span className={orderByClasses}/> : undefined}
        </th>
    }
}