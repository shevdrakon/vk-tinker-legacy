import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
        document.addEventListener('scroll', this.scroll, true)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scroll, true)

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