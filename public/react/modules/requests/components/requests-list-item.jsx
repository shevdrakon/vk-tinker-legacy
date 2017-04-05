import React, {Component, PropTypes} from 'react'

import Avatar from '../../../components/avatar.jsx'

export default class RequestsListItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            fullName: PropTypes.string,
            photo_50: PropTypes.string,
            userLink: PropTypes.string
        })
    }

    render() {
        const {userLink, fullName, photo_50} = this.props.item

        return <tr>
            <td>
                <a href={userLink} target="_blank">
                    <div className="avatar-container">

                        <Avatar src={photo_50}/>
                        <span>{fullName}</span>

                    </div>
                </a>
            </td>
        </tr>
    }
}