import React, {Component} from 'react'

import {Col} from 'react-bootstrap'

import ModalDropdown from '../../../components/modal-dropdown/modal-dropdown.jsx'

const optionItems = [
    {
        value: "option1",
        title: "Option 1"
    }, {
        value: "option2",
        title: "Option 2"
    },
    {
        value: "option3",
        title: "Option 3"
    }
]

export default class SampleModalDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: optionItems[0]
        }
    }

    selectItem = (eventKey) => {
        this.setState({
            selectedItem: eventKey
        })
    }

    render() {
        const {selectedItem} = this.state
        return <div className="row equal">
            <Col md={3} sm={12}>
                <ModalDropdown selectedItem={selectedItem} onSelect={this.selectItem}>{optionItems}</ModalDropdown>
            </Col>
        </div>
    }
}