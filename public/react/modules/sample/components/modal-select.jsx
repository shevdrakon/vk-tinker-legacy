import React, {Component} from 'react'

import {Col} from 'react-bootstrap'

import ModalSelect from '../../../components/modal-select/modal-select.jsx'
import ModalSelectItem from './modal-select-item.jsx'

const optionItems = [
    {
        value: "option1",
        title: "Option 1"
    }, {
        value: "option2",
        title: "Option 2"
    }, {
        value: "option3",
        title: "Option 3"
    }, {
        value: "option4",
        title: "Option 4"
    }, {
        value: "option5",
        title: "Option 5"
    }, {
        value: "option6",
        title: "Option 6"
    }, {
        value: "option7",
        title: "Option 7"
    }, {
        value: "option8",
        title: "Option 8"
    }, {
        value: "option9",
        title: "Option 9"
    }, {
        value: "option10",
        title: "Option 10"
    }, {
        value: "option11",
        title: "Option 11"
    }, {
        value: "option12",
        title: "Option 12"
    }, {
        value: "option13",
        title: "Option 13"
    }, {
        value: "option14",
        title: "Option 14"
    }, {
        value: "option15",
        title: "Option 15"
    }, {
        value: "option16",
        title: "Option 16"
    }, {
        value: "option17",
        title: "Option 17"
    }, {
        value: "option18",
        title: "Option 18"
    },     {
        value: "option19",
        title: "Option 19"
    }, {
        value: "option20",
        title: "Option 20"
    }, {
        value: "option21",
        title: "Option 21"
    }, {
        value: "option22",
        title: "Option 22"
    }, {
        value: "option23",
        title: "Option 23"
    }, {
        value: "option24",
        title: "Option 24"
    }, {
        value: "option25",
        title: "Option 25"
    }, {
        value: "option26",
        title: "Option 26"
    }, {
        value: "option27",
        title: "Option 27"
    }, {
        value: "option28",
        title: "Option 28"
    }, {
        value: "option29",
        title: "Option 29"
    }, {
        value: "option30",
        title: "Option 30"
    }, {
        value: "option31",
        title: "Option 31"
    }, {
        value: "option32",
        title: "Option 32"
    }, {
        value: "option33",
        title: "Option 33"
    }, {
        value: "option34",
        title: "Option 34"
    }, {
        value: "option35",
        title: "Option 35"
    }, {
        value: "option36",
        title: "Option 36"
    },
]

export default class SampleModalDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: optionItems[0]
        }
    }

    selectItem = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    render() {
        const {selectedItem} = this.state
        const itemTemplate = <ModalSelectItem/>

        return <div className="row equal">
            <Col md={3} sm={12}>
                <ModalSelect onSelect={this.selectItem} collection={optionItems} itemTemplate={itemTemplate}
                             selectedItem={selectedItem}/>
            </Col>
        </div>
    }
}