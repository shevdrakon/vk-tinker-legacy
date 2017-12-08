import React, {Component} from 'react'
import {observer, PropTypes as mPropTypes} from 'mobx-react'

import Icon from './react-mdl/icon.jsx'
import Avatar from './avatar.jsx'

@observer
export default class UserAvatarWithInfo extends Component {
    static propTypes = {
        user: mPropTypes.objectOrObservableObject
    }

    render() {
        const {
            user: {photo_50, hasGroupWithAdminRights, groupsWithAdminRights},
            ...rest
        } = this.props

        const title = groupsWithAdminRights.map(g => g.name).join(', ')

        return <div className="user-avatar-with-info" {...rest}>
            <Avatar src={photo_50}/>
            {hasGroupWithAdminRights && <Icon title={title} className="user-has-admin-groups">error_outline</Icon>}
        </div>
    }
}