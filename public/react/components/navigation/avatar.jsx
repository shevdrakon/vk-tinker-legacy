import React, {PropTypes} from 'react'

const Avatar = (props) => {
        const {src, alt, ...otherProps} = props
        return <div className="avatar-container">
                <img className="avatar-img" src={src} alt={alt} {...otherProps}/>
            </div>

}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Avatar