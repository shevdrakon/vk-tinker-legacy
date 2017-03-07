import React, {Component, PropTypes} from 'react'
import {propTypes as mPropTypes} from 'mobx'
import classnames from 'classnames'

import ListHeader from './list-header.jsx'
import ListContent from './list-content.jsx'
import ListContentHeader from './list-content-header.jsx'

export default class List extends Component {
    static propTypes = {
        plain: PropTypes.bool,
        children: PropTypes.node,
        itemTemplate: PropTypes.node,
        collection: mPropTypes.arrayOrObservableArray
    }

    render() {
        const {children, plain, itemTemplate, collection = []} = this.props
        const clones = React.Children.toArray(children)

        const header = clones.length > 0 && React.cloneElement(clones.find(x => x.type === ListHeader), {})
        const contentHeader = clones.length > 0 && React.cloneElement(clones.find(x => x.type === ListContentHeader), {})

        const classes = classnames({
            'card-plain': plain
        }, 'card')

        return <div className={classes}>
            {header}
            <ListContent itemTemplate={itemTemplate}>
                {contentHeader}
            </ListContent>
        </div>
    }
}

List.Header = ListHeader
List.ContentHeader = ListContentHeader