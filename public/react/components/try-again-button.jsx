import React, {PropTypes} from 'react'

import {Button} from 'react-mdl'

const TryAgainButton = (props) => {

    const handleClick = (e) => {
        e.preventDefault()

        props.onClick && props.onClick()
    }

    return <div className="try-again-button-container">
        <Button raised ripple colored onClick={handleClick}>
            Try again
        </Button>
    </div>
}

TryAgainButton.propTypes = {
    onClick: PropTypes.func
}

export default TryAgainButton