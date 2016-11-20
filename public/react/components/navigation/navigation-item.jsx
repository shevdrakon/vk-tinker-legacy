import React, {Component, PropTypes} from 'react'

export default class NavigationItem extends Component {
    static propTypes = {
        children: PropTypes.element
    };

    render() {
        return <li>{this.props.children}</li>
    }
}