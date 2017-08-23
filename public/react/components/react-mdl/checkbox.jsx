import React, {PropTypes} from 'react'
import {Checkbox as CheckboxMaterial} from 'material-ui'

const Checkbox = (props) => {

    const handleClick = (e) => {
        e && e.preventDefault()

        props.onCheck && props.onCheck()
    }

    const {label, checked, ...rest} = props

    return <CheckboxMaterial checked={checked} label={label} {...rest} onCheck={handleClick} />

}

Checkbox.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onCheck: PropTypes.func
}

export default Checkbox