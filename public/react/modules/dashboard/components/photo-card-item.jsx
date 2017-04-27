import React, {PropTypes, Component} from 'react'

import {Col} from 'react-bootstrap'
import Card from '../../../components/react-mdl/picture-card/picture-card.jsx'

export default class PhotoCardItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            photo_604: PropTypes.string,
            text: PropTypes.string,
            href: PropTypes.string,
            selected: PropTypes.bool
        }),

        album: PropTypes.shape({
            title: PropTypes.string
        }),

        onSelect: PropTypes.func
    }

    static childContextTypes = {
        handleClick: PropTypes.func
    }

    getChildContext() {
        return {handleClick: this.handleClick}
    }

    handleClick = () => {
        const {selected} = this.props.item

        this.props.onSelect && this.props.onSelect({item: this.props.item, selected: !selected})
    }

    render() {
        const {photo_604, text, href, selected} = this.props.item
        const {title} = this.props.album || {}

        return <Col md={3} sm={6}>
            <Card imgLink={href}
                  imgSrc={photo_604}
                  selected={selected}
                  cardText={title}>
                {text}
            </Card>
        </Col>
    }
}