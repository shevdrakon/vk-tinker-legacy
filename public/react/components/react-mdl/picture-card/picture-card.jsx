import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {PropTypes as mPropTypes} from 'mobx-react'
import ClassNames from 'classnames'

import Card from 'material-ui/Card'

import PictureCardMedia from './picture-card-media.jsx'
import PictureCardInfo from './picture-card-info.jsx'
import PictureCardMenuActions from './picture-card-menu-actions.jsx'
import PictureCardAlbumTitle from './picture-card-aldum-title.jsx'
import PictureCardActions from './picture-card-actions.jsx'

// import Modal from '../../modal.jsx'
// import Comment from './comment.jsx'

export default class PictureCard extends Component {
    static propTypes = {
        user: mPropTypes.objectOrObservableObject,

        imgSrc: PropTypes.string.isRequired,
        cardText: PropTypes.string,
        imgLink: PropTypes.string.isRequired,
        imgValidation: PropTypes.oneOf(['done', 'warning', 'bad']),
        selected: PropTypes.bool,
        comments: mPropTypes.arrayOrObservableArray,
        isSoldOut: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ])
    }

    static contextTypes = {
        handleClick: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    handleCommentsClick = () => {
        this.setState({showModal: true})
    }

    closeModal = () => {
        this.setState({showModal: false})
    }

    handleHeaderClick = () => {
        this.context.handleClick()
    }

    render() {
        const {
            user,
            imgSrc, cardText, imgLink,
            children, selected,
            isSoldOut, comments, ...otherProps
        } = this.props
        //const {showModal} = this.state
        const classes = ClassNames('card-container', {'selected': selected})

        const hasComments = comments && comments.count > 0
        // const modalHeader = <div>
        //     <span>Comments</span>
        // </div>

        return <Card raised className={classes} {...otherProps}>
            <div className="card-media-container">
                <PictureCardMedia image={imgSrc} onClick={this.handleHeaderClick}/>
                <PictureCardInfo user={user} isSoldOut={isSoldOut} />
                <PictureCardMenuActions imageLink={imgLink}/>
                <PictureCardAlbumTitle title={cardText}/>
            </div>

            <PictureCardActions
                imgLink={imgLink}
                showComments={hasComments}
                onCommentsClick={this.handleCommentsClick}>
                {children}
            </PictureCardActions>

            {/*<Modal*/}
            {/*show={showModal}*/}
            {/*onHide={this.closeModal}*/}
            {/*header={modalHeader}*/}
            {/*bsSize="medium"*/}
            {/*dialogClassName="modal-select-dialog">*/}
            {/*<ul>*/}
            {/*{*/}
            {/*comments.items.map(comment =>*/}
            {/*<Comment key={comment.id} comment={comment}/>*/}
            {/*)*/}
            {/*}*/}
            {/*</ul>*/}
            {/*<Modal.Footer>*/}
            {/*<Button ripple colored onClick={this.closeModal}>Close</Button>*/}
            {/*</Modal.Footer>*/}
            {/*</Modal>*/}
        </Card>
    }
}