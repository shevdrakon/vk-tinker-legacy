import React from 'react'
import PropTypes from 'prop-types'

const PageContainer = (props) => {
    const {children} = props

    return <div className="under-navigation">
        <div className="container">
            {children}
        </div>
    </div>
}

PageContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
}

export default PageContainer