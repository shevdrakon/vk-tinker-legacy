import React, {Component, PropTypes} from 'react'

import Input from './input.jsx'

export default class InputWithIcon extends Component {
    render() {
        const {icon, ...rest} = this.props

        return (
            <div className="input-with-icon">
                <i className="material-icons">{icon}</i>
                <Input fullWidth {...rest}/>
            </div>
        )
    }
}

InputWithIcon.propTypes = {
    icon: PropTypes.string.isRequired
}