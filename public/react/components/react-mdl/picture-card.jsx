import React, {Component,PropTypes} from 'react'
import {Link} from 'react-router'
import {Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu} from 'react-mdl'

import Icon from '../react-mdl/icon.jsx'

export default class PictureCard extends Component {
    static propTypes = {
        imgSrc: PropTypes.string.isRequired,
        cardText: PropTypes.string,
        imgLink: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {collapsed: true};
        this.toggleCollapse = this.toggleCollapse.bind(this)
    }

    toggleCollapse(){
        this.setState(prevState => {collapsed: !prevState.collapsed})
    }

    render(){
    const {imgSrc, cardText, imgLink, ...otherProps} = this.props
        const actionClass = this.state.collapsed ? 'small':'big'
       return <Card shadow={0} className="card-container" {...otherProps}>
           <CardTitle className="card-title"><img src={imgSrc} className="card-image"/></CardTitle>
           <CardText className="card-short-text">
               {cardText}
           </CardText>
           <CardActions className={"card-actions "+actionClass} border>
               <Button raised ripple><Icon>delete</Icon>Delete</Button>
               <IconButton name="more_vert" className="card-more" onClick={this.toggleCollapse}/>
               <div className="card-information">Lalala Info here.</div>
           </CardActions>
           <CardMenu className="card-menu">
               <a href={imgLink}><IconButton name="link" className="card-menu-icon"/></a>
           </CardMenu>
           <Icon className="card-validation done">check_circle</Icon>
       </Card>
    }
}