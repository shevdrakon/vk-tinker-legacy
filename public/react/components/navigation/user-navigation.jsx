import React from 'react'
import PropTypes from 'prop-types'

import {inject, observer} from 'mobx-react'

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

export default inject(({store: {application}}) => {
    return {
        user: application.user,
        status: application.status
    }
})(observer(UserNavigation))