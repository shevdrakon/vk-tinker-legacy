import React, {Component, PropTypes} from 'react'

import NavigationItem from './navigation-item.jsx'

export default class NavigationMobileItems extends Component {
    static propTypes = {
        children: PropTypes.array
    };

    render() {
        return <ul id="nav-mobile" className="side-nav">
            {this.props.children.map(c => <NavigationItem key={c.props.to}>{c}</NavigationItem>)}
        </ul>
    }
}