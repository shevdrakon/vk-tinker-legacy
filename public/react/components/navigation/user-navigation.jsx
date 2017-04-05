import React, {PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../utils/inject'
import Navigation from './navigation.jsx'


const UserNavigation = (props) => {
    const {photo_50} = props.user
    const {requestsCount} = props.status

    return <Navigation avatar={photo_50} requestsCount = {requestsCount} />
}

UserNavigation.propTypes = {
    user: PropTypes.shape({
        photo_50: PropTypes.string
    }),
    status: PropTypes.shape({
        requestsCount: PropTypes.number
    })
}

export default inject(({application}) => {
    return {
        user: application.user,
        status: application.status
    }
})(observer(UserNavigation))