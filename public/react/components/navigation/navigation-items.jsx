import React, {Component} from 'react'

import NavigationItem from './navigation-item.jsx'

export default class NavigationItems extends Component {
    render() {
        return <ul className="right hide-on-med-and-down">
            {this.props.children}
        </ul>
    }
}