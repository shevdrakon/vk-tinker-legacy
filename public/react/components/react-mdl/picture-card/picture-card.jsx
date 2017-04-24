import React, {Component, PropTypes} from 'react'
import {Card, CardText} from 'react-mdl'
import ClassNames from 'classnames'

import PictureCardHeader from './picture-card-header.jsx'
import PictureCardFooter from './picture-card-footer.jsx'

export default class PictureCard extends Component {
    static propTypes = {
        imgSrc: PropTypes.string.isRequired,
        cardText: PropTypes.string,
        imgLink: PropTypes.string.isRequired,
        imgValidation: PropTypes.oneOf(['done', 'warning', 'bad']),
        selected: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ])
    }

    render() {
        const {imgSrc, cardText, imgLink, imgValidation, children, selected, ...otherProps} = this.props
        const headerProps = {imgSrc, imgLink, imgValidation}
        const className = ClassNames({
            "card-container": true,
            "selected": selected
        })

        return <Card shadow={0} className={className} {...otherProps}>
            <PictureCardHeader {...headerProps} />
            <CardText className="card-short-text">
                {cardText}
            </CardText>
            <PictureCardFooter imgLink={imgLink}>{children}</PictureCardFooter>
        </Card>
    }
}