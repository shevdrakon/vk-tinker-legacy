import React, {PropTypes} from 'react'

import Button from './react-mdl/button.jsx'

const TryAgainButton = (props) => {

    const handleClick = (e) => {
        e.preventDefault()

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