import React, {Component, PropTypes} from 'react'
import {propTypes as mPropTypes} from 'mobx-react'

import {Button} from 'react-bootstrap'

import Modal from '../modal.jsx'
import ModalDropdownItem from './modal-dropdown-item.jsx'
import List from '../list/list.jsx'

export default class ModalDropdown extends Component {
    static propTypes = {
        collection: mPropTypes.arrayOrObservableArray,
        onSelect: PropTypes.func,
        selectedItem: PropTypes.object,
        rowTemplate: PropTypes.node
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
        const {children, collection,rowTemplate} = this.props

        return <div className="modal-dropdown">
            <Button onClick={this.openModal}>
                {selectedItem.title}
                &nbsp;
                <span className="caret"></span>
            </Button>
            <Modal show={showModal} onHide={this.closeModal} dialogClassName = "modal-dropdown-dialog">
                <List collection={collection} rowTemplate={rowTemplate} rowKeySelector="id">
                {
                    children.map(item => <ModalDropdownItem item={item}
                                                            selected={item === selectedItem}
                                                            onSelect={this.selectItem} key={item.value}/>)
                }
                </List>
                <Button onClick = {this.closeModal}>Select</Button>
            </Modal>
        </div>
    }
}