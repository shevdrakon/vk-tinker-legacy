import React, {Component, PropTypes} from 'react'
import {observer, propTypes as mProptypes} from 'mobx-react'
import inject from '../../../../utils/inject'

import {Button, Textfield} from 'react-mdl'

import AlbumSelectItem from './album-select-item.jsx'
import Modal from '../../../../components/modal.jsx'

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
            selectedItem: selected,
            tempSelectedItem: selected,
            shownCollection: this.props.albums.collection
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    searchAlbum = (event) => {
        const inputValue = event.target.value.trim().toLowerCase()
        const inputLength = inputValue.length
        const initialCollection = this.props.albums.collection

        const shownCollection = inputLength === 0 ? initialCollection : initialCollection.filter(
            album => album.title.toLowerCase().includes(inputValue)
        )

        this.setState({shownCollection})
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            tempSelectedItem: this.state.selectedItem,
            shownCollection: this.props.albums.collection
        })
    }

    closeModalAndSelect = () => {
        const selectedItem = this.state.tempSelectedItem
        this.props.albums.select(selectedItem)
        this.setState({
            selectedItem,
            showModal: false,
            shownCollection: this.props.albums.collection
        })
    }

    selectItem = (eventKey) => {
        this.setState({
            tempSelectedItem: eventKey
        })
    }

    render() {
        const {showModal, selectedItem, tempSelectedItem, shownCollection} = this.state

        const modalHeader = <div>
            <span>Select an album</span>
            <Textfield label="Search" expandable expandableIcon="search" onChange={this.searchAlbum} className="modal-select-search"/>
        </div>

        return <li className="dropdown">
            <a onClick={this.openModal} className="dropdown-toggle">
                {selectedItem.title}
                &nbsp;
                <span className="caret"/>
            </a>

            <Modal show={showModal} onHide={this.closeModal}
                   header={modalHeader}
                   bsSize="medium" dialogClassName="modal-select-dialog albums-dialog">
                <ul>
                    {
                        shownCollection.map(item =>
                            <AlbumSelectItem item={item} onSelect={this.selectItem}
                                             selected={item === tempSelectedItem} key={item.id || 0}/>
                        )
                    }
                </ul>
                <Modal.Footer>
                    <Button ripple colored onClick={this.closeModalAndSelect}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </li>
    }
}

export default inject(({dashboard}) => {
    return {
        albums: dashboard.albums
    }
})(observer(AlbumSelect))