import React, {Component, PropTypes} from 'react'

export default class Avatar extends Component{
    render(){
        const {src, alt} = this.props
        return(
            <div className="avatar-container">
                <img className="avatar-img" src={src} alt={alt}/>
            </div>
        )
    }
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}