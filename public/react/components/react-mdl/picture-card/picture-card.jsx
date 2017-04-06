import React, {Component, PropTypes} from 'react'
import {Card, CardText} from 'react-mdl'

import PictureCardHeader from './picture-card-header.jsx'
import PictureCardFooter from './picture-card-footer.jsx'

export default class PictureCard extends Component {
    static propTypes = {
        imgSrc: PropTypes.string.isRequired,
        cardText: PropTypes.string,
        imgLink: PropTypes.string.isRequired,
        imgValidation: PropTypes.oneOf(['done', 'warning', 'bad']),
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ])
    }

    render() {
        const {imgSrc, cardText, imgLink, imgValidation, children, ...otherProps} = this.props
        const headerProps = {imgSrc, imgLink, imgValidation}

        return <Card shadow={0} className="card-container" {...otherProps}>
            <PictureCardHeader {...headerProps} />
            <CardText className="card-short-text">
                {cardText}
            </CardText>
            <PictureCardFooter>{children}</PictureCardFooter>
        </Card>
    }
}