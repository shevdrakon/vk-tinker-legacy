import React, {Component, PropTypes} from 'react'

import {scrollTop, documentHeight} from '../utils/dom-helper'

import BusyDots from './busy-dots.jsx'

export default class InfiniteScroll extends Component {
    static propTypes = {
        className: PropTypes.string,
        scrolling: PropTypes.bool,
        threshold: PropTypes.number,
        onScroll: PropTypes.func,
        children: PropTypes.node
    }

    static defaultProps = {
        threshold: 45
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll)

        clearTimeout(this.timeout)
    }

    scroll = () => {
        const {threshold, onScroll} = this.props

        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
            const bottom = scrollTop(document) + window.innerHeight + threshold
            const bottomReached = bottom > documentHeight(document)

            if (bottomReached) {
                onScroll && onScroll()
            }
        }, 300)
    }

    render() {
        const {children, scrolling, className} = this.props

        return <div className={className}>
            {children}
            {scrolling && <BusyDots/>}
        </div>
    }
}