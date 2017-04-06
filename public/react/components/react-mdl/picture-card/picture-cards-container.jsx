import React, {PropTypes} from 'react'

import {Col} from 'react-bootstrap'
import PictureCard from './picture-card.jsx'

const PictureCardsContainer = (props) => {
    return <div className="row equal">
        {
            props.children.map( child => <Col md={3} sm={6}>{child}</Col> )
        }
    </div>
}

PictureCardsContainer.propTypes = {
    children: PropTypes.arrayOf( PropTypes.instanceOf( PictureCard ) )
}

export default PictureCardsContainer