import React, {Component, PropTypes} from 'react'

import Avatar from '../../../components/avatar.jsx'

export default class RequestsListItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            fullName: PropTypes.string,
            photo_50: PropTypes.string,
            userLink: PropTypes.string,
            selected: PropTypes.bool,

            onToggle: PropTypes.func
        })
    }

    handleToggle = () => {
        const {selected} = this.props.item

        this.props.onToggle({item: this.props.item, selected: !selected})
    }

    render() {
        const {userLink, fullName, photo_50, selected} = this.props.item

        return <tr>
            <td>
                <input type="checkbox" checked={selected} onClick={this.handleToggle} />
            </td>
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