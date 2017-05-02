import React, {Component, PropTypes} from 'react'
import {observer, propTypes as mProptypes} from 'mobx-react'
import inject from '../../../../utils/inject'

import {Button} from 'react-mdl'

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
            tempSelectedItem: selected
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            tempSelectedItem: this.state.selectedItem
        })
    }

    closeModalAndSelect = () => {
        const selectedItem = this.state.tempSelectedItem
        this.setState({selectedItem})
        this.props.albums.select(selectedItem)
        this.setState({
            showModal: false
        })
    }

    selectItem = (eventKey) => {
        this.setState({
            tempSelectedItem: eventKey
        })
    }

    render() {
        const {showModal, selectedItem, tempSelectedItem} = this.state
        const {collection} = this.props.albums

        return <li className="dropdown">
            <a onClick={this.openModal} className="dropdown-toggle">
                {selectedItem.title}
                &nbsp;
                <span className="caret"/>
            </a>

            <Modal show={showModal} onHide={this.closeModal}
                   header="Select an album"
                   bsSize="medium" dialogClassName="modal-select-dialog">
                <ul>
                    {
                        collection.map(item =>
                            <AlbumSelectItem item={item} onSelect={this.selectItem}
                                             selected={item === tempSelectedItem} key={item.aid || 0}/>
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