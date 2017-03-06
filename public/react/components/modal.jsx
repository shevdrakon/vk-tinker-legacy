import React, {Component, PropTypes} from 'react'
import ModalBase from 'react-bootstrap/lib/Modal'
import classnames from 'classnames'

import Icon from './react-mdl/icon.jsx'

let counter = 0

export default class Modal extends Component {
    static defaultProps = {
        bsSize: 'medium'
    }

    static propTypes = {
        header: PropTypes.node,
        onHide: PropTypes.func,
        children: PropTypes.node,
        show: PropTypes.bool,
        bsSize: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
        dialogClassName: PropTypes.string,
        titleClassName: PropTypes.string,
    }

    state = {
        entered: false,
        counter: 0
    }

    handleHide = (e) => {
        e && e.preventDefault()

        const {onHide} = this.props
        onHide && onHide()
    }

    handleEnter = () => {
        this.setState({
            entered: false
        })
    }

    handleEntered = () => {
        this.setState({
            entered: true
        })
    }

    handleEntering = () => {
        this.shown = true

        counter++
        this.setState({
            counter
        })
    }

    handleExited = () => {
        this.hide()
    }

    componentWillUnmount() {
        this.hide()
    }

    hide = () => {
        if (this.shown)
            counter--

        this.shown = false
    }

    render() {
        const {header, children, show, bsSize, dialogClassName} = this.props
        const dialogClasses = classnames({
            [dialogClassName]: dialogClassName,
            [bsSize]: bsSize
        })
        const classes = classnames({
            'modal-shown': this.state.entered,
        })

        return <ModalBase
            ref={ref => this.modal = ref}
            show={show}
            animation={true}
            backdrop={true}
            bsClass={this.state.counter > 1 ? `modal${this.state.counter}` : 'modal'}
            dialogClassName={dialogClasses}
            enforceFocus={true}
            className={classes}
            onEntering={this.handleEntering}
            onEnter={this.handleEnter}
            onEntered={this.handleEntered}
            onExited={this.handleExited}
            onHide={this.handleHide}>
            {header && <ModalBase.Header>
                <button type="button" className="close" onClick={this.handleHide}>
                    <Icon>clear</Icon>
                </button>
                <ModalBase.Title>{header}</ModalBase.Title>
            </ModalBase.Header>}
            {children}
        </ModalBase>
    }
}

Modal.Header = ModalBase.Header
Modal.Footer = ModalBase.Footer
Modal.Body = ModalBase.Body