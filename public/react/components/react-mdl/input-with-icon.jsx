import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {InputAdornment} from 'material-ui'

import Icon from './icon.jsx'
import Input from './input.jsx'

export default class InputWithIcon extends Component {
    render() {
        const {icon, ...rest} = this.props

        return (
            <div className="input-with-adornment">
                <Input {...rest} startAdornment={
                    <InputAdornment position="start">
                        <Icon className="icon">{icon}</Icon>
                    </InputAdornment>
                }
                />
            </div>
        )
    }
}

InputWithIcon.propTypes = {
    icon: PropTypes.string.isRequired
}