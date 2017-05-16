import React, {Component,PropTypes} from 'react'
import {CardActions, IconButton, Button} from 'react-mdl'
import classNames from 'classnames'

import Icon from '../icon.jsx'

export default class PictureCardFooter extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ]),
        className: PropTypes.string,
        imgLink: PropTypes.string,
        showComments: PropTypes.bool,
        onCommentsClick: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {collapsed: true};
        this.toggleCollapse = this.toggleCollapse.bind(this)
    }

    toggleCollapse(){
        this.setState(prevState => ({collapsed: !prevState.collapsed}))
    }

    render(){
        const {children, className, imgLink, showComments, onCommentsClick, ...otherProps} = this.props
        const {collapsed} = this.state
        const collapsedClass = collapsed ? 'small' : 'big'
        const footerClasses = classNames(className,'card-actions', collapsedClass)
        const collapseIcon = collapsed ? 'more_vert' : 'close'
        const commentsButton = <Button ripple onClick={onCommentsClick}>
                <Icon>comment</Icon>
            </Button>

        return  <CardActions className={footerClasses} border>
            {showComments && commentsButton}
            <Button ripple><Icon>delete</Icon></Button>

            <IconButton name={collapseIcon} className="card-more" onClick={this.toggleCollapse}/>
            <a target="_blank" href={imgLink} className="card-footer-link">
                <IconButton name="link" className="card-menu-icon"/>
            </a>
            <div className="card-information" {...otherProps}>{children}</div>
        </CardActions>
    }
}