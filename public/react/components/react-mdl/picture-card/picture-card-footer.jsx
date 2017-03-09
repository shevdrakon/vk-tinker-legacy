import React, {Component,PropTypes} from 'react'
import {CardActions, IconButton, Button} from 'react-mdl'
import classNames from 'classnames'

import Icon from '../icon.jsx'

export default class PictureCardFooter extends Component {
    static propTypes = {
        collapsed: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ]),
        className: PropTypes.string,
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
        const {children, className,...otherProps} = this.props
        const {collapsed} = this.state
        const collapsedClass = collapsed ? 'small' : 'big'
        const footerClasses = classNames(className,'card-actions', collapsedClass)
        const collapseIcon = collapsed ? 'more_vert' : 'close'

        return  <CardActions className={footerClasses} border>
            <Button ripple><Icon>delete</Icon>Delete</Button>
            <IconButton name={collapseIcon} className="card-more" onClick={this.toggleCollapse}/>
            <div className="card-information" {...otherProps}>{children}</div>
        </CardActions>
    }
}