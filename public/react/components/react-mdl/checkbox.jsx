import React, {PropTypes} from 'react'
import {Checkbox as CheckboxMaterial} from 'material-ui'

const Checkbox = (props) => {

    const handleClick = () => {
        props.onChange && props.onChange()
    }

    const {label, checked, ...rest} = props

    return <CheckboxMaterial checked={checked} label={label} {...rest} onChange={handleClick} />

}

Checkbox.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default Checkbox