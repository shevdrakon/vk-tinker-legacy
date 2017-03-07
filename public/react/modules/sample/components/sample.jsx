import React, {Component, PropTypes} from 'react'

import {Col} from 'react-bootstrap'
import Title from './title.jsx'

import {Navigation} from '../../../components/navigation/navigation-bar.jsx'
import SampleList from './sample-list.jsx'

export default class DashboardPage extends Component {
    static propTypes = {
        dashboard: PropTypes.shape({
            collapsibleMenuShown: PropTypes.bool,
            onMenuClick: PropTypes.func
        })
    }

    static load() {
    }

    render() {
        return <div>
            <Title>Navigation</Title>
            <Navigation/>

            <div className="container">
                <Col sm={3}>
                <Title>Checkboxes</Title>
                </Col>
            </div>

            <div className="container">
                <Title>List</Title>
                <SampleList/>
            </div>
        </div>
    }
}