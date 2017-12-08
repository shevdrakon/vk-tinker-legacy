import React from 'react'
import PropTypes from 'prop-types'

import {Input as InputMaterial} from 'material-ui'

const Input = (props) => {
    const {placeholder, fullWidth, ...rest} = props

    return <InputMaterial fullWidth={fullWidth} placeholder={placeholder} {...rest} />
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    fullWidth: PropTypes.bool
}

export default Input