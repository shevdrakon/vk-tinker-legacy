import React from 'react'
import PropTypes from 'prop-types'

import {Col} from 'react-bootstrap'
import PictureCard from './picture-card.jsx'

const PictureCollection = (props) => {
    return <div className="row equal">
        {
            props.children.map((child, index) => <Col key={index} md={3} sm={6}>{child}</Col> )
        }
    </div>
}

PictureCollection.propTypes = {
    children: PropTypes.arrayOf( PropTypes.instanceOf( PictureCard ) )
}

PictureCollection.PictureCard = PictureCard

export default PictureCollection

