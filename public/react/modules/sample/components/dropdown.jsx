import React from 'react'

import {Col} from 'react-bootstrap'

import SelectDropdown from '../../../components/dropdown.jsx'

const SampleDropdown = () => {
    const optionValues = [
        {
            value: "option1",
            title: "Option 1"
        },{
            value:"option2",
            title: "Option 2"
        }
    ]

    return <div className="row equal">
        <Col md={12} sm={12}>
            <SelectDropdown onSelect={(eventKey)=> alert(eventKey.title)}>
                {optionValues}
            </SelectDropdown>
        </Col>
    </div>
}

export default SampleDropdown