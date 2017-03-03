import React, {Component, PropTypes} from 'react'
import {Textfield} from 'react-mdl'

const propTypes = {
    icon: PropTypes.string.isRequired,
    style: PropTypes.object
}

export class TextfieldWithIcon extends Component {
    render(){
        const {icon, style, ...otherProps} = this.props
        const textfieldStyle= {...style, marginLeft: '32px'}
        return (
            <div className="mdl-textfield-with-icon" style={{width: style.width}}>
                <span className = "mdl-textfield-icon"><i className="material-icons">{icon}</i></span>
                <Textfield {...otherProps} style={textfieldStyle}/>
            </div>
        )
    }
}

TextfieldWithIcon.propTypes = propTypes

