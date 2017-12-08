import React from 'react'
import PropTypes from 'prop-types'

import Button from './react-mdl/button.jsx'

const FetchNextButton = (props) => {

    const handleClick = () => {
        props.onClick && props.onClick()
    }

    return <div className="center-button-container">
        <Button onClick={handleClick}>
            Load More
        </Button>
    </div>
}

FetchNextButton.propTypes = {
    onClick: PropTypes.func
}

export default FetchNextButton