import React, {Component, PropTypes} from 'react'

export default class ListHeader extends Component {
    static propTypes = {
        color: PropTypes.oneOf(['purple']),
        title: PropTypes.string,
        subtitle: PropTypes.string
    }

    render() {
        const {color = 'purple', title, subtitle} = this.props
        const hasSubTitle = subtitle && subtitle.length > 0

        return <div className="card-header" data-background-color={color}>
            <h4 className="title">{title}</h4>
            {hasSubTitle && <p className="category">{subtitle}</p>}
        </div>
    }
}