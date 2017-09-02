import React, {Component, PropTypes} from 'react'
import {PropTypes as mPropTypes} from 'mobx-react'

import Icon from '../icon.jsx'
import UserAvatarWithInfo from '../../user-avatar-with-info'

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