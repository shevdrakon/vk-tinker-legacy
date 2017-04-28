import React, {Component} from 'react'

import {Col, Button} from 'react-bootstrap'

import Modal from '../../../components/modal.jsx'

export default class SampleModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            showModal: false
        }
    }

    open = () => {
        this.setState({
            showModal: true
        })
    }

    close = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        const {showModal} = this.state

        return <div className="row equal">
            <Col md={3} sm={12}>
                <Button onClick = {this.open}>Launch Modal</Button>
            </Col>

            <Modal show={showModal} onHide={this.close} header="About access_token" bsSize="medium">
                <Modal.Body>
                    Some modal body text goes here!
                </Modal.Body>
                <Modal.Footer>
                    <Button ripple colored onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}