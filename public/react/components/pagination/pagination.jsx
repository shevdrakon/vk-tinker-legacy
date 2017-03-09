import React, {Component, PropTypes} from 'react'

import Button from './pagination-button.jsx'

export default class Pagination extends Component {
    static propTypes = {
        activePage: PropTypes.number,
        items: PropTypes.number,
        maxButtons: PropTypes.number,
        first: PropTypes.bool,
        last: PropTypes.bool,
        prev: PropTypes.bool,
        next: PropTypes.bool
    }

    static defaultProps = {
        activePage: 1,
        items: 1,
        maxButtons: 0,
        first: false,
        last: false,
        prev: false,
        next: false
    }

    renderPageButtons(activePage, items, maxButtons) {
        const pageButtons = []

        let startPage;
        let endPage;

        if (maxButtons && maxButtons < items) {
            startPage = Math.max(
                Math.min(
                    activePage - Math.floor(maxButtons / 2, 10),
                    items - maxButtons + 1
                ),
                1
            );
            endPage = startPage + maxButtons - 1;
        } else {
            startPage = 1;
            endPage = items;
        }

        for (let page = startPage; page <= endPage; ++page) {
            pageButtons.push(
                <Button
                    key={page}
                    eventKey={page}
                    active={page === activePage}>
                    {page}
                </Button>
            );
        }

        return pageButtons;
    }

    render() {
        const {prev, next, first, last, activePage, items, maxButtons} = this.props

        return <ul className="pagination">
            {prev && <Button>&lt; prev</Button>}
            {first && <Button>1</Button>}

            {this.renderPageButtons(activePage, items, maxButtons)}

            {last && <Button>{items}</Button>}
            {next && <Button>next &gt;</Button>}
        </ul>
    }
}