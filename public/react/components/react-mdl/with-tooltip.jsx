import React, {Component, PropTypes} from 'react'

import {Tooltip} from 'material-ui'

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const WithTooltip = (WrappedComponent) => {

    class WithTooltip extends Component {
        static propTypes = {
            label: PropTypes.node.isRequired
        }

        constructor(props) {
            super(props)

            this.displayName = `WithTooltip(${getDisplayName(WrappedComponent)})`;
        }

        render() {
            const {label, ...rest} = this.props

            return <Tooltip position="top" label={label}><WrappedComponent {...rest}/></Tooltip>
        }
    }

    return WithTooltip
}

export default WithTooltip