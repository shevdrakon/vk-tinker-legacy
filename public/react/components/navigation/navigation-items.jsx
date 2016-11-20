import React, {Component, PropTypes} from 'react'

import NavigationItem from './navigation-item.jsx'

export default class NavigationItems extends Component {
    static propTypes = {
        children: PropTypes.array
    };

    render() {
        return <ul className="right hide-on-med-and-down">
            {this.props.children.map(c => <NavigationItem key={c.props.to}>{c}</NavigationItem>)}
        </ul>
    }
}