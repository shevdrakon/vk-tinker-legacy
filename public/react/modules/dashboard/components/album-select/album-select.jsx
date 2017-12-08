import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {observer, propTypes as mProptypes} from 'mobx-react'
import inject from '../../../../utils/inject'

import Button from '../../../../components/react-mdl/button.jsx'
import InputWithIcon from '../../../../components/react-mdl/input-with-icon.jsx'

import AlbumSelectItem from './album-select-item.jsx'
import Modal from '../../../../components/react-mdl/modal.jsx'

class AlbumSelect extends Component {
    static propTypes = {
        albums: PropTypes.shape(
            {
                load: PropTypes.func,
                collection: mProptypes.arrayOrObservableArray,
                selected: PropTypes.object,
                select: PropTypes.func
            }
        ),
    }

    constructor(props) {
        super(props)

        const {selected} = this.props.albums

        this.state = {
            showModal: false,
            search: '',
            selected
        }
    }

    openModal = () => {
        const {selected} = this.props.albums

        this.setState({
            showModal: true,
            selected
        })
    }

    handleSearchChange = (e) => {
        const search = e.target.value.trim().toLowerCase()

        this.setState({search})
    }

    closeModal = () => {
        this.setState({showModal: false})
    }

    closeModalAndSelect = () => {
        const selected = this.state.selected

        this.props.albums.select(selected)

        this.setState({showModal: false})
    }

    selectItem = (eventKey) => {
        this.setState({selected: eventKey})
    }

    getFilterCollection = () => {
        const {search} = this.state
        const {albums: {collection}} = this.props

        return search.length
            ? collection.filter(album => album.title.toLowerCase().includes(search))
            : collection
    }

    render() {
        const {selected: selectedAlbum} = this.props.albums
        const {showModal, selected, search} = this.state
        const filterCollection = this.getFilterCollection()

        const header = <div>
            <span>Select an album</span>
            <InputWithIcon fullWidth icon="search" value={search} onChange={this.handleSearchChange}/>
        </div>

        return <li className="dropdown">
            <a onClick={this.openModal} className="dropdown-toggle">
                {selectedAlbum.title}
                &nbsp;
                <span className="caret"/>
            </a>

            <Modal show={showModal} onRequestClose={this.closeModal}
                   header={header}
                   className="albums-dialog">
                <Modal.Body>
                    {
                        filterCollection.map(item =>
                            <AlbumSelectItem item={item} onSelect={this.selectItem}
                                             search={search}
                                             selected={item === selected} key={item.id || 0}/>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModalAndSelect}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </li>
    }
}

export default inject(
    ({
         dashboard
     }) => {
        return {
            albums: dashboard.albums
        }
    }
)(observer(AlbumSelect))