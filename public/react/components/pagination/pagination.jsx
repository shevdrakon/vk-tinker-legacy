import React, {Component, PropTypes} from 'react'

import Button from './pagination-button.jsx'

export default class Pagination extends Component {
    static propTypes = {
        activePage: PropTypes.number,
        items: PropTypes.number,
        maxButtons: PropTypes.number,
        prev: PropTypes.bool,
        next: PropTypes.bool,
        onSelect: PropTypes.func
    }

    static defaultProps = {
        activePage: 1,
        items: 1,
        maxButtons: 0,
        prev: false,
        next: false
    }

    renderPageButtons(activePage, items, maxButtons, buttonProps) {
        const pageButtons = []

        let startPage
        let endPage

        if (maxButtons && maxButtons < items) {
            startPage = Math.max(Math.min(activePage - Math.floor(maxButtons / 2, 10), items - maxButtons + 1), 1)
            endPage = startPage + maxButtons - 1
        } else {
            startPage = 1
            endPage = items
        }

        for (let page = startPage; page <= endPage; ++page) {
            pageButtons.push(
                <Button key={page} eventKey={page} active={page === activePage} {...buttonProps}>
                    {page}
                </Button>
            )
        }

        if (startPage > 1) {
            if (startPage > 2) {
                pageButtons.unshift(
                    <Button key="ellipsisFirst" disabled {...buttonProps}>{'\u2026'}</Button>
                )
            }

            pageButtons.unshift(
                <Button key={1} eventKey={1} active={false} {...buttonProps}>1</Button>
            )
        }

        if (endPage < items) {
            if (endPage < items - 1) {
                pageButtons.push(
                    <Button key="ellipsis" disabled {...buttonProps}>{'\u2026'}</Button>
                )
            }

            pageButtons.push(
                <Button key={items} eventKey={items} active={false} {...buttonProps}>
                    {items}
                </Button>
            )
        }

        return pageButtons
    }

    render() {
        const {prev, next, activePage, items, maxButtons, onSelect} = this.props
        const buttonProps = {
            onSelect
        }

        return <ul className="pagination">
            {prev && <Button eventKey={activePage - 1} disabled={activePage === 1} {...buttonProps}>&lt; prev</Button>}

            {this.renderPageButtons(activePage, items, maxButtons, buttonProps)}

            {next && <Button eventKey={activePage + 1} disabled={activePage >= items} {...buttonProps}>next &gt;</Button>}
        </ul>
    }
}