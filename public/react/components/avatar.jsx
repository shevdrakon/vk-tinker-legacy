import React from 'react'
import PropTypes from 'prop-types'

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