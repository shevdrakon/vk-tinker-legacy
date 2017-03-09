import React from 'react'

import {Col} from 'react-bootstrap'

import PictureCard from '../../../components/react-mdl/picture-card/picture-card.jsx'

const SampleList = () => {
    return <div>
            <Col sm={6}>
                <PictureCard imgLink="https://ya.ru" imgSrc="http://www.getmdl.io/assets/demos/welcome_card.jpg" cardText='Test text'>
                    `Lorem ipsum tram pam pam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia
                    ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacu
                    s eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
                    lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus e
                    leifend lacinia...`
                </PictureCard>
            </Col>

        <Col md={6}>
            <PictureCard imgLink="https://ya.ru" imgSrc="http://www.getmdl.io/assets/demos/welcome_card.jpg" cardText='Test text'>
                `Lorem ipsum tram pam pam. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia
                ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacu
                s eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
                lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus e
                leifend lacinia...`
            </PictureCard>
        </Col>

    </div>
}

export default SampleList