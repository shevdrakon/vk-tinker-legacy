import React from 'react'
import cn from 'classnames'

const BusyDots = ({className, ...rest}) => {
    const classes = cn({
        'busy infinite-scroll-busy busy-indicator-dots busy-indicator-dots-gray': true,
        [className]: className
    })

    return <div className={classes} {...rest}>
        <span className="busy-indicator-dot"/>
        <span className="busy-indicator-dot"/>
        <span className="busy-indicator-dot"/>
    </div>
}

BusyDots.propTypes = {
    className: React.PropTypes.string
}

export default BusyDots