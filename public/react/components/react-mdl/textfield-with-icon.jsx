import React, {Component, PropTypes} from 'react'
import {TextField} from 'material-ui'
import classNames from 'classnames';

export default class TextFieldWithIcon extends Component {
    render () {
        const {icon, style, iconClassName, ...rest} = this.props
        const iconClasses = classNames("tinker-textfield-icon", iconClassName)

        return (
            <div className="tinker-textfield-with-icon" style={style}>
                <span className = {iconClasses}><i className="material-icons">{icon}</i></span>
                <div className="tinker-textfield-container" style={{width: "100%"}}>
                    <TextField {...rest}/>
                </div>
            </div>
        )
    }
}

TextFieldWithIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    style: PropTypes.object,
    iconClassName: PropTypes.string
}