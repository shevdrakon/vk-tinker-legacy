import React, {Component, PropTypes} from 'react'

import Icon from '../icon.jsx'
import Avatar from '../../../components/avatar.jsx'

export default class PictureCardInfo extends Component {
    static propTypes = {
        userPhoto: PropTypes.string,
        isSoldOut: PropTypes.bool
    }

    render() {
        const {userPhoto, isSoldOut, ...rest} = this.props

        return <div className="card-info" {...rest}>
            <Avatar src={userPhoto}/>
            {isSoldOut && <Icon>monetization_on</Icon>}
        </div>
    }
}