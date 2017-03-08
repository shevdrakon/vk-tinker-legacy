import React, {Component, PropTypes} from 'react'

export default class ListFooter extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element
        ])
    }

    render() {
        const {children} = this.props

        return <div>
            {children}
        </div>
    }
}