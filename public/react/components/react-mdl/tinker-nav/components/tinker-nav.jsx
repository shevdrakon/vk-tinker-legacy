import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {TinkerAvatar} from '../components/tinker-ava.jsx'
import {NavigationMenu} from '../components/navigation-menu.jsx'
import classNames from 'classnames';


export class NavigationHeader extends Component{
    static propTypes = {
        menuShown: PropTypes.bool,
        onMenuClick: PropTypes.func
}



    static load(){}
    render(){
        return (
            <div className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="tinker-nav-header">
                        <div className="tinker-title-container">
                            <TinkerAvatar src="http://avatars.mitosa.net/ring/sm070.jpg"/>
                            <div className="tinker-page-title">Mommy's treasure</div>
                        </div>
                        <NavigationMenu/>
                        <button className="navbar-toggle tinker-navbar-toggle" onClick={this.props.onMenuClick}><i className="material-icons">menu</i></button>
                    </div>
                </div>
                {this.props.menuShown ? <NavigationMenu className='tinker-navbar-collapse'/> : ""}
            </div>
        )
    }
}
