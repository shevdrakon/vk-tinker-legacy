import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Navigation} from 'react-mdl'
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string,
}

export class NavigationMenu extends Component{


    render(){
        const navigationClassName = classNames("tinker-nav-container",this.props.className)
        return(
            <Navigation className={navigationClassName}>
                <Link to="/dashboard" className="tinker-nav-button" activeClassName="active">Dashboard</Link>
                <Link to="/blacklist" className="tinker-nav-button" activeClassName="active">Black List</Link>
                <Link to="/pending" className="tinker-nav-button" activeClassName="active">Pending</Link>
            </Navigation>
        )
    }
}

NavigationMenu.propTypes = propTypes



