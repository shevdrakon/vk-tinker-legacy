import React, {Component, PropTypes} from 'react'

import {Col} from 'react-bootstrap'
import Title from './title.jsx'

import {Navigation} from '../../../components/navigation/navigation-bar.jsx'
import SamplePictureCard from './sample-picture-card.jsx'
import SampleList from './sample-list.jsx'
import Checkboxes from './checkboxes.jsx'


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
                    <Checkboxes/>
                </Col>
            </div>

            <div className="container">
                <Title>List</Title>
                <SampleList/>
            </div>

            <div className="container">
                <Title>Picture card</Title>
                <SamplePictureCard/>
            </div>
        </div>
    }
}