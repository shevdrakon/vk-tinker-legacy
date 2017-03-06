import React, {Component, PropTypes} from 'react'

import {Button} from 'react-mdl'

import Modal from '../../../components/modal.jsx'

export default class AboutAccessToken extends Component {
    static propTypes = {
        show: PropTypes.bool,
        onHide: PropTypes.func
    }

    handleClose = (e) => {
        e.preventDefault()

        this.props.onHide()
    }

    render() {
        const {show, onHide} = this.props

        return <Modal show={show} onHide={onHide} header="About access_token" bsSize="medium">
            <Modal.Body>
                <a target="_blank" href="https://vk.com/dev/implicit_flow_user">Read here on vk page</a>
            </Modal.Body>
            <Modal.Footer>
                <Button ripple colored onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    }
}