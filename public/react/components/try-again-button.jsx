import React from 'react'
import PropTypes from 'prop-types'

import Button from './react-mdl/button.jsx'

const TryAgainButton = (props) => {

    const handleClick = () => {
        props.onClick && props.onClick()
    }

    return <div className="center-button-container">
        <Button onClick={handleClick}>Try again</Button>
    </div>
}

TryAgainButton.propTypes = {
    onClick: PropTypes.func
}

export default TryAgainButton