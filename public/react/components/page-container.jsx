import React, {PropTypes} from 'react'
import UserNavigation from './navigation/user-navigation.jsx'

const PageContainer = (props) => {
    const {children} = props

    return <div className="page-container">
        <UserNavigation/>
        <div className="under-navigation">
            <div className="container">
                {children}
            </div>
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