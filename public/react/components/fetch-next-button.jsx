import React, {PropTypes} from 'react'

import {Button} from 'react-mdl'

const FetchNextButton = (props) => {

    const handleClick = (e) => {
        e.preventDefault()

        props.onClick && props.onClick()
    }

    return <div className="center-button-container">
        <Button raised ripple colored onClick={handleClick}>
            Fetch Next
        </Button>
    </div>
}

FetchNextButton.propTypes = {
    onClick: PropTypes.func
}

export default FetchNextButton