import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Icon = (props) => {
    const {className, children, ...rest} = props

    const classes = classnames({
        'material-icons': true,
        [className]: className
    })

    return <i className={classes} {...rest}>{children}</i>
}

Icon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Icon