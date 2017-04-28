import React, {Component, PropTypes} from 'react'
import {propTypes as mPropTypes} from 'mobx-react'

import {Button} from 'react-bootstrap'

import ModalSelectItem from './modal-select-item.jsx'
import Modal from '../modal.jsx'

export default class ModalSelect extends Component {
    static propTypes = {
        collection: mPropTypes.arrayOrObservableArray,
        onSelect: PropTypes.func,
        selectedItem: PropTypes.object,
        itemTemplate: PropTypes.node
    }

    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            selectedItem: this.props.selectedItem
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
        this.props.onSelect(this.state.selectedItem)
    }

    selectItem = (eventKey) => {
        this.setState({
            selectedItem: eventKey
        })
    }

    render() {
        const {showModal, selectedItem} = this.state
        const {collection, itemTemplate} = this.props

        return <div className="modal-select">
            <Button onClick={this.openModal}>
                {selectedItem.title}
                &nbsp;
                <span className="caret"/>
            </Button>
            <Modal show={showModal} onHide={this.closeModal} dialogClassName="modal-select-dialog">
                <div className="modal-body">
                    <ul>
                        {
                            collection.map(item =>
                                <ModalSelectItem item={item} onSelect={this.selectItem}
                                                 selected={item === selectedItem}>
                                    {React.cloneElement(itemTemplate, {item})}
                                </ModalSelectItem>
                            )
                        }
                    </ul>
                </div>
                <div className="modal-footer">
                    <Button onClick={this.closeModal}>Select</Button>
                </div>
            </Modal>
        </div>
    }
}