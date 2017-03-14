import React, {Component, PropTypes} from 'react'

import Avatar from '../../../components/avatar.jsx'

export default class PendingListItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            fullName: PropTypes.string,
            photo_50: PropTypes.string,
        })
    }

    render() {
        const {fullName, photo_50} = this.props.item

        return <tr>
            <td>
                <div className="avatar-container">
                    <Avatar src={photo_50}/>
                    <span>{fullName}</span>
                </div>
            </td>
        </tr>
    }
}