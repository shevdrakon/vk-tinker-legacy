import React from 'react'

import {Col} from 'react-bootstrap'

import Dropdown from '../../../components/dropdown.jsx'

const SampleDropdown = () => {
    return <div className="row equal">
        <Col md={12} sm={12}>
            <Dropdown>
                <option>Option1</option>
                <option>Option2</option>
            </Dropdown>
        </Col>
    </div>
}

export default SampleDropdown