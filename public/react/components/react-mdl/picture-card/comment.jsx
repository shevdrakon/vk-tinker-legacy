import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Avatar from '../../../components/avatar.jsx'
import HighlightText from '../../../components/highlight-text.jsx'

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.number,
            highlightedText: PropTypes.string,
            user: PropTypes.shape({
                fullName: PropTypes.string,
                photo_50: PropTypes.string
            })
        })
    }

    render() {
        const {comment} = this.props
        const {photo_50, fullName} = comment.user

        const date = new Date(comment.date * 1000)
        const dateDescription = date.toLocaleString('ru')

        return <li className="comment">
            <Avatar src={photo_50}/>
            <div>
                <span className="author">{fullName}</span>
                <span className="date">{dateDescription}</span>
                <div>
                    <HighlightText searchClassName="comment-highlight" search="Продан">{comment.text}</HighlightText>
                </div>
            </div>
        </li>
    }
}