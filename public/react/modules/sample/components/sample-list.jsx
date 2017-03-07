import React from 'react'

import {Col} from 'react-bootstrap'

import List from '../../../components/list/list.jsx'
import Row from './sample-list-row.jsx'

const SampleList = () => {
    const collection = [{
        name: 'Ivan',
        country: 'Russia',
        city: 'Yaroslavl',
        salary: '18.000 rub.'
    }, {
        name: 'Hanso',
        country: 'Norway',
        city: 'Oslo',
        salary: '4.200 kr.'
    }]

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

export default SampleList