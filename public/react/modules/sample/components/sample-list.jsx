import React from 'react'
import PropTypes from 'prop-types'
import {Col} from 'react-bootstrap'

import List from '../../../components/list/list.jsx'
import Row from './sample-list-row.jsx'

const SampleList = ({collection}) => {
    const rowTemplate = <Row/>

    return <div>
        <Col md={6}>
            <List collection={collection} rowTemplate={rowTemplate} rowKeySelector="name">
                <List.Header>Card table example</List.Header>
                <List.Column>Name</List.Column>
                <List.Column>Country</List.Column>
                <List.Column>City</List.Column>
                <List.Column>Salary</List.Column>
            </List>
        </Col>

        <Col md={6}>
            <List plain hover collection={collection} rowTemplate={rowTemplate} rowKeySelector="name">
                <List.Header subtitle="with hover">Plain table example</List.Header>
                <List.Column>Name</List.Column>
                <List.Column>Country</List.Column>
                <List.Column>City</List.Column>
                <List.Column>Salary</List.Column>
            </List>
        </Col>

        <Col md={6}>
            <h5>without header</h5>
            <List hover collection={collection} rowTemplate={rowTemplate} rowKeySelector="name">
                <List.Column>Name</List.Column>
                <List.Column>Country</List.Column>
                <List.Column>City</List.Column>
                <List.Column>Salary</List.Column>
            </List>
        </Col>
    </div>
}

SampleList.propTypes = {
    collection: PropTypes.array
}

export default SampleList