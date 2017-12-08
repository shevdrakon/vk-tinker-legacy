import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle
} from 'material-ui/Dialog/'

import Slide from 'material-ui/transitions/Slide'

import Icon from './icon.jsx'

export default class Modal extends Component {

    static propTypes = {
        header: PropTypes.node,
        onRequestClose: PropTypes.func,
        children: PropTypes.node,
        show: PropTypes.bool,
        className: PropTypes.string
    }

    handleRequestClose = () => {
        this.props.onRequestClose && this.props.onRequestClose()
    }

    render() {
        const {header, children, show, className} = this.props

        const ContentText = React.Children
            .toArray(children)
            .filter((child) => child.type === DialogContent)
            .map(child => child.props.children)

        const Actions = React.Children
            .toArray(children)
            .filter((child) => child.type === DialogActions)
            .map(child => child.props.children)

        return <Dialog className="dialog-modal"
                       classes={{paper: className}}
                       open={show}
                       transition={Slide}
                       onRequestClose={this.handleRequestClose}>
            {header && <DialogTitle disableTypography className="dialog-title">
                <button type="button" className="close" onClick={this.handleRequestClose}>
                    <Icon>clear</Icon>
                </button>
                <h4>{header}</h4>
            </DialogTitle>}
            <DialogContent className="dialog-content">
                {ContentText}
            </DialogContent>
            <DialogActions className="dialog-actions">
                {Actions}
            </DialogActions>
        </Dialog>
    }
}

Modal.Header = DialogTitle
Modal.Body = DialogContent
Modal.Footer = DialogActions