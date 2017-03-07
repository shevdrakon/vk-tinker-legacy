import React, {PropTypes} from 'react'

const Title = (props) => {
    const {children} = props

    return <div className="title">
        <h3>{children}</h3>
    </div>
}

Title.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]),
}

export default Title