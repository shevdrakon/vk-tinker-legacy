import React, {PropTypes} from 'react'

const Avatar = (props) => {
        const {src, alt, ...rest} = props

        return <div className="avatar-container">
                <img className="avatar-img" src={src} alt={alt} {...rest}/>
            </div>
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Avatar