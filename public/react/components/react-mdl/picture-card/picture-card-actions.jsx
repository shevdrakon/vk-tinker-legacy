import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

import {CardActions} from 'material-ui/Card'

import Button from '../button.jsx'
import Icon from '../icon.jsx'
import IconButton from '../icon-button.jsx'

export default class PictureCardActions extends Component {
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

    state = {
        collapsed: true
    }

    toggleCollapse = () => {
        this.setState(prevState => ({collapsed: !prevState.collapsed}))
    }

    render() {
        const {children, className, imgLink, showComments, onCommentsClick, ...otherProps} = this.props
        const {collapsed} = this.state

        const classes = classNames(className, 'card-actions', {
            'small': collapsed,
            'big': !collapsed
        })

        const collapseIcon = collapsed ? 'more_vert' : 'close'

        return <CardActions className={classes}>
            <Button color="default" raised={false} dense><Icon>delete</Icon></Button>
            <IconButton color="default" className="card-more" onClick={this.toggleCollapse}>{collapseIcon}</IconButton>

            {/*<a target="_blank" href={imgLink} className="card-footer-link">*/}
                {/*<IconButton className="card-menu-icon">link</IconButton>*/}
            {/*</a>*/}
            {/*<div className="card-information" {...otherProps}>{children}</div>*/}
        </CardActions>
    }
}