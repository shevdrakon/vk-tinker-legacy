import React, {Component, PropTypes} from 'react'
import {Card, CardText, Button} from 'react-mdl'
import ClassNames from 'classnames'

import PictureCardHeader from './picture-card-header.jsx'
import PictureCardFooter from './picture-card-footer.jsx'
import Modal from '../../modal.jsx'
import Comment from './comment.jsx'

export default class PictureCard extends Component {
    static propTypes = {
        imgSrc: PropTypes.string.isRequired,
        cardText: PropTypes.string,
        imgLink: PropTypes.string.isRequired,
        imgValidation: PropTypes.oneOf(['done', 'warning', 'bad']),
        selected: PropTypes.bool,
        comments: PropTypes.object,
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ])
    }

    static contextTypes = {
        handleClick: PropTypes.func
    }

    constructor(props){
        super(props)

        this.state = {
            showModal: false
        }
    }

    handleCommentsClick = () => {
        this.setState(
            {showModal: true}
        )
    }

    closeModal = () => {
        this.setState(
            {showModal: false}
        )
    }

    handleHeaderClick = () => {
        this.context.handleClick()
    }



    render() {
        const {imgSrc, cardText, imgLink, imgValidation, children, selected, comments, ...otherProps} = this.props
        const {showModal} = this.state
        const headerProps = {imgSrc, imgLink, imgValidation, onClick: this.handleHeaderClick}
        const className = ClassNames({
            "card-container": true,
            "selected": selected
        })

        const showComments = comments && comments.count > 0
        const modalHeader = <div>
            <span>Comments</span>
        </div>

        return <Card shadow={0} className={className} {...otherProps}>
            <PictureCardHeader {...headerProps} />
            <CardText className="card-short-text">
                {cardText}
            </CardText>
            <PictureCardFooter
                imgLink={imgLink}
                showComments = {showComments}
                onCommentsClick = {this.handleCommentsClick}>
                {children}
            </PictureCardFooter>

            <Modal
                show={showModal}
                onHide={this.closeModal}
                header={modalHeader}
                bsSize="medium"
                dialogClassName="modal-select-dialog">
                <ul>
                    {
                        comments.items.map(comment =>
                            <Comment key={comment.id} comment={comment}/>
                        )
                    }
                </ul>
                <Modal.Footer>
                    <Button ripple colored onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Card>
    }
}