import React, {Component, PropTypes} from 'react'

import Button from './pagination-button.jsx'

export default class Pagination extends Component {
    static propTypes = {
        activePage: PropTypes.number,
        items: PropTypes.number,
        maxButtons: PropTypes.number,
        prev: PropTypes.bool,
        next: PropTypes.bool
    }

    static defaultProps = {
        activePage: 1,
        items: 1,
        maxButtons: 0,
        prev: false,
        next: false
    }

    renderPageButtons(activePage, items, maxButtons) {
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
                <Button key={page} eventKey={page} active={page === activePage}>
                    {page}
                </Button>
            )
        }

        if (startPage > 1) {
            if (startPage > 2) {
                pageButtons.unshift(
                    <Button key="ellipsisFirst" disabled>{'\u2026'}</Button>
                )
            }

            pageButtons.unshift(
                <Button key={1} eventKey={1} active={false}>1</Button>
            )
        }

        if (endPage < items) {
            if (endPage < items - 1) {
                pageButtons.push(
                    <Button key="ellipsis" disabled>{'\u2026'}</Button>
                )
            }

            pageButtons.push(
                <Button key={items} eventKey={items} active={false}>
                    {items}
                </Button>
            )
        }

        return pageButtons
    }

    render() {
        const {prev, next, activePage, items, maxButtons} = this.props

        return <ul className="pagination">
            {prev && <Button>&lt; prev</Button>}

            {this.renderPageButtons(activePage, items, maxButtons)}

            {next && <Button>next &gt;</Button>}
        </ul>
    }
}