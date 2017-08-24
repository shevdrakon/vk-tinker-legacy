import React, {PropTypes} from 'react'

import Button from './react-mdl/button.jsx'

const FetchNextButton = (props) => {

    const handleClick = () => {
        props.onClick && props.onClick()
    }

    return <div className="center-button-container">
        <Button onClick={handleClick}>
            Fetch Next
        </Button>
    </div>
}

FetchNextButton.propTypes = {
    onClick: PropTypes.func
}

export default FetchNextButton