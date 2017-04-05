import  React, {PropTypes} from 'react'
import {FormControl} from 'react-bootstrap'

const Dropdown = (props) => {
    const {children} = props
    return <FormControl componentClass="select" placeholder="select">
            {children}
        </FormControl>
}

Dropdown.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default Dropdown