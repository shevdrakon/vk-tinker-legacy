import React, {Component, PropTypes} from 'react'

import Input from './input.jsx'
import classNames from 'classnames';

export default class InputWithIcon extends Component {
    render() {
        const {icon, style, iconClassName, ...rest} = this.props
        const iconClasses = classNames("tinker-textfield-icon", iconClassName)

        return (
            <div className="tinker-textfield-with-icon" style={style}>
                <span className={iconClasses}>
                    <i className="material-icons">{icon}</i>
                </span>
                <div className="tinker-textfield-container" style={{width: "100%"}}>
                    <Input fullWidth {...rest}/>
                </div>
            </div>
        )
    }
}

InputWithIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    style: PropTypes.object,
    iconClassName: PropTypes.string
}