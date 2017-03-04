import React, {Component, PropTypes} from 'react'
import {Textfield} from 'react-mdl'
import classNames from 'classnames';

const propTypes = {
    icon: PropTypes.string.isRequired,
    style: PropTypes.object,
    iconClassName: PropTypes.string
}

export class TextfieldWithIcon extends Component {
    render(){
        const {icon, style, iconClassName, ...otherProps} = this.props
        const iconClasses = classNames("tinker-textfield-icon",iconClassName)
        return (
            <div className="tinker-textfield-with-icon" style={style}>
                <span className = {iconClasses}><i className="material-icons">{icon}</i></span>
                <div className="tinker-textfield-container" style={{width: "100%"}}>
                    <Textfield {...otherProps}/>
                </div>
            </div>
        )
    }
}

TextfieldWithIcon.propTypes = propTypes

