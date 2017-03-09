import React, {Component, PropTypes} from 'react'

import Avatar from '../../../components/avatar.jsx'

export default class BlacklistListItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            fullName: PropTypes.string,
            photo_50: PropTypes.string,
            ban_info: PropTypes.shape({
                admin: PropTypes.shape({
                    fullName: PropTypes.string
                }),
                end_date: PropTypes.number,
                comment: PropTypes.string
            })
        })
    }

    getEndDateLabel(endDate) {
        if (endDate === 0)
            return 'навсегда'

        const date = new Date(endDate * 1000)
        return `${date.toLocaleDateString('ru')} ${date.toLocaleTimeString('ru')}`
    }

    render() {
        const {fullName, photo_50, ban_info: {admin: {fullName: adminFullName}, end_date, comment}} = this.props.item
        const endDateLabel = this.getEndDateLabel(end_date)

        return <tr>
            <td>
                <div className="avatar-container">
                    <Avatar src={photo_50}/>
                    <span>{fullName}</span>
                </div>
            </td>
            <td>{adminFullName}</td>
            <td>{endDateLabel}</td>
            <td>{comment}</td>
        </tr>
    }
}