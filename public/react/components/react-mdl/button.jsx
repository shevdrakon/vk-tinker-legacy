import React from 'react'
import PropTypes from 'prop-types'

import {Button as ButtonMaterial} from 'material-ui'

const Button = (props) => {

    const handleClick = (e) => {
        e.preventDefault()

        props.onClick && props.onClick()
    }

    const {children, ...rest} = props

    return <ButtonMaterial raised {...rest} onClick={handleClick}>
        {children}
    </ButtonMaterial>
}

Button.defaultProps = {
    raised: true,
    color: "primary"
}

Button.propTypes = {
    raised: PropTypes.bool,
    color: PropTypes.oneOf(["primary", "accent", "default"]),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default Button