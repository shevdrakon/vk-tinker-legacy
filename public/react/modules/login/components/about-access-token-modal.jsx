import React, {Component, PropTypes} from 'react'

import Icon from '../../../components/react-mdl/icon.jsx'
import Button from '../../../components/react-mdl/button.jsx'
import Modal from '../../../components/react-mdl/modal.jsx'

export default class AboutAccessToken extends Component {
    state = {
        show: false
    }

    handleShowClick = () => {
        this.setState({show: true})
    }

    handleRequestClose = () => {
        this.setState({show: false})
    }

    render() {
        return <span>
            <Icon className="access-token-info" onClick={this.handleShowClick}>info</Icon>

            <Modal show={this.state.show} onRequestClose={this.handleRequestClose} header="About access_token">
                <Modal.Body>
                    <a target="_blank" href="https://vk.com/dev/implicit_flow_user">Read here on vk page</a>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleRequestClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </span>
    }
}