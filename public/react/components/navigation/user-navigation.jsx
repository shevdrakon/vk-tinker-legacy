import React, {PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../utils/inject'

import Navigation from './navigation.jsx'

const UserNavigation = (props) => {
    const {user, status, ...otherProps} = props
    const {photo_50} = user
    const {requestsCount} = status

    return <Navigation avatar={photo_50} requestsCount = {requestsCount} {...otherProps}/>
}

UserNavigation.propTypes = {
    user: PropTypes.shape({
        photo_50: PropTypes.string
    }),
    status: PropTypes.shape({
        requestsCount: PropTypes.number
    }),
    requests:PropTypes.object
}

export default inject(({application}) => {
    return {
        user: application.user,
        status: application.status
    }
})(observer(UserNavigation))