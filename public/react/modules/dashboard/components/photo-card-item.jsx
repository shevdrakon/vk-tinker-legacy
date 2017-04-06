import React, {PropTypes, Component} from 'react'

import {Col} from 'react-bootstrap'
import Card from '../../../components/react-mdl/picture-card/picture-card.jsx'

export default class PhotoCardItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            photo_604: PropTypes.string,
            text: PropTypes.string,
            href: PropTypes.string
        })
    }

    render() {
        const {photo_604, text, href} = this.props.item

        return <Col md={3} sm={6}>
            <Card imgLink={href}
                  imgSrc={photo_604}
                  cardText='Test text'>
                {text}
            </Card>
        </Col>
    }
}