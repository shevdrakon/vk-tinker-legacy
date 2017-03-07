import React, {Component, PropTypes} from 'react'

export default class ListContentHeader extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        const {children, ...rest} = this.props

        return <thead {...rest}>
            {children}
        </thead>
    }
}