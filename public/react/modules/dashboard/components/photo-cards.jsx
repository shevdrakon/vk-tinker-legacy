import React, {Component, PropTypes} from 'react'
import {observer, propTypes as mProptypes} from 'mobx-react'
import inject from '../../../utils/inject'

import BusyDots from '../../../components/busy-dots.jsx'
import TryAgainButton from '../../../components/try-again-button.jsx'
import InfiniteScroll from '../../../components/infinite-scroll.jsx'

import PhotoCardItem from './photo-card-item.jsx'

export class PhotoCards extends Component {
    static propTypes = {
        photos: PropTypes.shape({
            loading: PropTypes.bool,
            fetching: PropTypes.bool,
            fetchingFailed: PropTypes.bool,

            collection: mProptypes.arrayOrObservableArray,

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
        const {fetching, fetchingFailed, loading, collection} = this.props.photos
        const scrolling = !loading && fetching

        return <div>
            {loading && <BusyDots/>}

            <InfiniteScroll scrolling={scrolling} onScroll={this.handleScroll}>
                <div className="row equal">
                    {collection.map(photo => <PhotoCardItem key={photo.id} item={photo}/> )}
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