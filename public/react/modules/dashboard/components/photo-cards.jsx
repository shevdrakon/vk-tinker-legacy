import React, {Component, PropTypes} from 'react'

import {Col} from 'react-bootstrap'

import Card from '../../../components/react-mdl/picture-card/picture-card.jsx'

export default class PhotoCards extends Component {
    static propTypes = {
        collection: PropTypes.arrayOrObservableArray
    }

    render() {
        return <div className="row equal">
            <Col md={3} sm={6}>
                <Card imgLink="https://ya.ru" imgSrc="https://pp.userapi.com/c636621/v636621941/4bddc/ZoK2V4JjEzw.jpg"
                      cardText='Test text'>
                    test 1
                </Card>
            </Col>
            <Col md={3} sm={6}>
                <Card imgLink="https://ya.ru" imgSrc="http://www.getmdl.io/assets/demos/welcome_card.jpg"
                      cardText='Test text'>
                    test 1
                </Card>
            </Col>
            <Col md={3} sm={6}>
                <Card imgLink="https://ya.ru" imgSrc="http://www.getmdl.io/assets/demos/welcome_card.jpg"
                      cardText='Test text'>
                    test 1
                </Card>
            </Col>
            <Col md={3} sm={6}>
                <Card imgLink="https://ya.ru" imgSrc="http://www.getmdl.io/assets/demos/welcome_card.jpg"
                      cardText='Test text'>
                    test 1
                </Card>
            </Col>
        </div>
    }
}