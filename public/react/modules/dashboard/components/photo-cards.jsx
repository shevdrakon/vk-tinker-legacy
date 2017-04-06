import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import {Col} from 'react-bootstrap'
import BusyDots from '../../../components/busy-dots.jsx'
import Card from '../../../components/react-mdl/picture-card/picture-card.jsx'
import TryAgainButton from '../../../components/try-again-button.jsx'
import InfiniteScroll from '../../../components/infinite-scroll.jsx'

export class PhotoCards extends Component {
    static propTypes = {
        photos: PropTypes.shape({
            loading: PropTypes.bool,
            fetching: PropTypes.bool,
            fetchingFailed: PropTypes.bool,

            repeat: PropTypes.func,
            fetchNext: PropTypes.func
        })
    }

    handleTryAgainClick = () => {
        this.props.photos.repeat()
    }

    handleScroll = () => {
        this.props.photos.fetchNext()
    }

    render() {
        const {fetching, fetchingFailed, loading} = this.props.photos
        const scrolling = !loading && fetching

        return <div>
            {loading && <BusyDots/>}

            <InfiniteScroll scrolling={scrolling} onScroll={this.handleScroll}>
                <div className="row equal">
                    <Col md={3} sm={6}>
                        <Card imgLink="https://ya.ru"
                              imgSrc="https://pp.userapi.com/c636621/v636621941/4bddc/ZoK2V4JjEzw.jpg"
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
            </InfiniteScroll>

            {fetchingFailed && <TryAgainButton onClick={this.handleTryAgainClick}/>}
        </div>
    }
}

export default inject(({dashboard}) => {
    return {
        photos: dashboard.photos
    }
})(observer(PhotoCards))