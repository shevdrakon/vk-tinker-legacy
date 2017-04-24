import React from 'react'

import PictureCollection from '../../../components/react-mdl/picture-card/picture-collection.jsx'

const SamplePictureCollection = () => {
    const PictureCard = PictureCollection.PictureCard
    return <PictureCollection>
                <PictureCard imgLink="https://ya.ru" imgSrc="http://www.getmdl.io/assets/demos/welcome_card.jpg" cardText='Test text' selected>
                    `Lorem ipsum tram pam pam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia
                    ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacu
                    s eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
                    lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus e
                    leifend lacinia...`
                </PictureCard>
                <PictureCard imgLink="https://ya.ru" imgSrc="http://cs8.pikabu.ru/post_img/2017/03/13/11/148942956413858896.jpg" cardText='Test text'>
                    `Lorem ipsum tram pam pam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia
                    ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacu
                    s eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
                    lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus e
                    leifend lacinia...`
                </PictureCard>
                <PictureCard imgLink="https://ya.ru" imgSrc="http://cs8.pikabu.ru/post_img/2017/03/13/11/148942956413858896.jpg" cardText='Test text' selected>
                    Lorem ipsum tram pam pam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia
                    leifend lacinia...
                </PictureCard>
                <PictureCard imgLink="https://ya.ru" imgSrc="http://cs8.pikabu.ru/post_img/2017/03/13/11/148942956413858896.jpg" cardText='Test text'>
                    s eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
                    lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus e
                    leifend lacinia...
                </PictureCard>
                <PictureCard imgLink="https://ya.ru" imgSrc="http://cs8.pikabu.ru/post_img/2017/03/13/11/148942956413858896.jpg" cardText='Test text'>
                    `Lorem ipsum tram pam pam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia
                    ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacu
                    s eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
                    lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus e
                    leifend lacinia...`
                </PictureCard>
                <PictureCard imgLink="https://ya.ru" imgSrc="http://cs8.pikabu.ru/post_img/2017/03/13/11/148942956413858896.jpg" cardText='Test text'>
                    `Lorem ipsum tram pam pam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia
                    ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacu
                    s eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
                    lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus e
                    leifend lacinia...`
                </PictureCard>
            </PictureCollection>
}

export default SamplePictureCollection