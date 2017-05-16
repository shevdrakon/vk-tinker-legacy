import React, {Component, PropTypes} from 'react'

import Avatar from '../../../components/avatar.jsx'
import Icon from '../icon.jsx'

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            user: PropTypes.shape({
                fullName: PropTypes.string,
                photo_50: PropTypes.string,
                userLink: PropTypes.string,
            })
        })
    }

    render() {
        const {comment} = this.props
        const {photo_50, fullName, userLink} = comment.user

        return <li className="comment">
            <div className="avatar-container">
                <Avatar src={photo_50}/>
                <span>{fullName}</span>
                <span><a href={userLink}><Icon>link</Icon></a></span>
            </div>
            <span>{comment.text}</span>
        </li>
    }
}