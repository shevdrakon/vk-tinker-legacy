import React, {PropTypes} from 'react'
import {Button as ButtonMaterial} from 'material-ui'

const Button = (props) => {

    const handleClick = (e) => {
        e.preventDefault()

        props.onClick && props.onClick()
    }

    const {children, color, ...rest} = props

    return <ButtonMaterial raised color={color} {...rest} onClick={handleClick}>
        {children}
    </ButtonMaterial>
}

Button.defaultProps = {
    color: "primary"
}

Button.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default Button