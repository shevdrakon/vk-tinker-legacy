import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {PropTypes as mPropTypes} from 'mobx-react'

import Icon from '../icon.jsx'
import UserAvatarWithInfo from '../../user-avatar-with-info.jsx'

export default class PictureCardInfo extends Component {
    static propTypes = {
        user: mPropTypes.objectOrObservableObject,
        isSoldOut: PropTypes.bool
    }

    render() {
        const {user, isSoldOut, ...rest} = this.props

        return <div className="card-info" {...rest}>
            <UserAvatarWithInfo user={user}/>
            {isSoldOut && <Icon>monetization_on</Icon>}
        </div>
    }
}