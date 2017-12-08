import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Icon from './icon.jsx'
import Input from './input.jsx'

export default class InputWithIcon extends Component {
    render() {
        const {icon, ...rest} = this.props

        return (
            <div className="input-with-icon">
                <Icon>{icon}</Icon>
                <Input {...rest}/>
            </div>
        )
    }
}

InputWithIcon.propTypes = {
    icon: PropTypes.string.isRequired
}