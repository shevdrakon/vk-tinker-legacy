import React, {Component, PropTypes} from 'react'
import {observer, propTypes as mProptypes} from 'mobx-react'
import inject from '../../../utils/inject'

import BusyDots from '../../../components/busy-dots.jsx'
import FetchNextButton from '../../../components/fetch-next-button.jsx'
import TryAgainButton from '../../../components/try-again-button.jsx'

import PhotoCardItem from './photo-card-item.jsx'

export class PhotoCards extends Component {
    static propTypes = {
        photos: PropTypes.shape({
            loading: PropTypes.bool,
            fetching: PropTypes.bool,
            fetchingFailed: PropTypes.bool,
            nofetch: PropTypes.bool,

            collection: mProptypes.arrayOrObservableArray,

            repeat: PropTypes.func,
            fetchNext: PropTypes.func,
            toggleSelect: PropTypes.func
        }),

        albums: PropTypes.shape({
            getAlbumById: PropTypes.func
        })
    }

    handleTryAgainClick = () => {
        this.props.photos.repeat()
    }

    handleFetchNext = () => {
        this.props.photos.fetchNext()
    }

    handleCardSelect = (payload) => {
        this.props.photos.toggleSelect(payload)
    }

    getAlbumById = (id) => {
        return this.props.albums.getAlbumById(id)
    }

    render() {
        const {fetchingFailed, loading, nofetch, collection} = this.props.photos

        if (loading)
            return <BusyDots/>

        return <div>
            <div className="row equal">
                {collection.map(photo => <PhotoCardItem key={photo.id}
                                                        album={this.getAlbumById(photo.album_id)}
                                                        item={photo}
                                                        onSelect={this.handleCardSelect}/>)}
            </div>

            {!nofetch && !fetchingFailed && <FetchNextButton onClick={this.handleFetchNext}/>}
            {fetchingFailed && <TryAgainButton onClick={this.handleTryAgainClick}/>}
        </div>
    }
}

export default inject(({dashboard}) => {
    return {
        photos: dashboard.photos,
        albums: dashboard.albums
    }
})(observer(PhotoCards))