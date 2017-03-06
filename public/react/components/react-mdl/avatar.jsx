import React, {Component, PropTypes} from 'react'
import classNames from 'classnames';

const propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}
export class Avatar extends Component{
    render(){
        const {src, alt, ...otherProps} = this.props
        return(
            <div className="avatar-container">
                <img className="avatar-img" src={src} alt={alt}/>
            </div>
        )
    }
}

Avatar.propTypes = propTypes