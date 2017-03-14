import React, {PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../utils/inject'

import Avatar from './avatar.jsx'

const CurrentUserAvatar = (props) => {
    const {photo_50} = props.user

    return <Avatar src={photo_50}/>
}

CurrentUserAvatar.propTypes = {
    user: PropTypes.shape({
        photo_50: PropTypes.string
    })
}

export default inject(({application}) => {
    return {
        user: application.user
    }
})(observer(CurrentUserAvatar))