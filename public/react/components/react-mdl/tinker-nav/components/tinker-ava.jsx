import React, {Component, PropTypes} from 'react'
import classNames from 'classnames';

const propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}
export class TinkerAvatar extends Component{
    render(){
        const {src, alt, ...otherProps} = this.props
        return(
            <div className="tinker-ava-container">
                <img className="tinker-ava-img" src={src} alt={alt}/>
            </div>
        )
    }
}

TinkerAvatar.propTypes = propTypes