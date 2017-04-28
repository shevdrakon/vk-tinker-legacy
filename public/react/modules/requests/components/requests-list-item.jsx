import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import {Checkbox} from 'react-mdl'

import Avatar from '../../../components/avatar.jsx'

class RequestsListItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            fullName: PropTypes.string,
            photo_50: PropTypes.string,
            userLink: PropTypes.string,
            selected: PropTypes.bool,
            id: PropTypes.number
        }),
        onToggle: PropTypes.func
    }

    handleToggle = () => {
        const {selected} = this.props.item

        this.props.onToggle({item: this.props.item, selected: !selected})
    }


    render() {
        const {userLink, fullName, photo_50, selected} = this.props.item

        return <tr>
            <td className="checkbox-column" onClick={this.handleToggle}>
                <Checkbox checked={selected} onChange={this.handleToggle} ripple/>
            </td>
            <td onClick={this.handleToggle}>
                <div className="avatar-container">
                    <Avatar src={photo_50}/>
                    <span>{fullName}</span>

                </div>
            </td>
            <td>
                <a href={userLink} target="_blank">
                    <i className="material-icons">link</i>
                </a>
            </td>
        </tr>
    }
}

export default inject(({requests}) => {
    return {
        list: requests
    }
})(observer(RequestsListItem))