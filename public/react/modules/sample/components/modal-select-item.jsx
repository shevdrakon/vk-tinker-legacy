import React, {Component, PropTypes} from 'react'

export default class ModalSelectItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            value: PropTypes.string,
            title: PropTypes.string,
        })
    }

    render() {
        const {title} = this.props.item

        return <div>
            {title}
        </div>
    }
}