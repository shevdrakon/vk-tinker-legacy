import React, {PropTypes} from 'react'
import classnames from 'classnames'

import Icon from './icon.jsx'

const IconToggle = (props) => {
    const {children, checked, ...rest} = props

    const classes = classnames({
        'material-icons': true,
        'checked': checked
    })

    return <Icon className={classes} {...rest}>{children}</Icon>
}

IconToggle.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default IconToggle