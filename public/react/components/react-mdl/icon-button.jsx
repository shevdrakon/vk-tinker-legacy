import React, {PropTypes} from 'react'

import {IconButton as MuiIconButton} from 'material-ui'

const IconButton = (props) => {
    const {children, ...rest} = props

    return <MuiIconButton {...rest}>
        {children}
    </MuiIconButton>
}

IconButton.defaultProps = {
    color: "primary"
}

IconButton.propTypes = {
    color: PropTypes.oneOf(["primary", "accent", "contrast", "default", "inherit"]),
    children: PropTypes.node.isRequired
}

export default IconButton