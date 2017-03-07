import React, {Component, PropTypes} from 'react'

export default class ListContent extends Component {
    static propTypes = {
        children: PropTypes.node,
        itemTemplate: PropTypes.node
    }

    render() {
        const {children} = this.props

        return <div className="card-content">
            <table className="table">
                {children}
            </table>
        </div>
    }
}