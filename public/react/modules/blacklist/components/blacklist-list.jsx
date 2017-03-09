import React, {PropTypes, Component} from 'react'
import {observer, propTypes as mPropTypes} from 'mobx-react'
import inject from '../../../utils/inject'

import List from '../../../components/list/list.jsx'
import ListItem from './blacklist-list-item.jsx'

class BlacklistList extends Component {
    static propTypes = {
        list: PropTypes.shape({
            loading: PropTypes.bool,
            fetching: PropTypes.bool,
            collection: mPropTypes.arrayOrObservableArray
        })
    }

    render() {
        const {loading, fetching, collection} = this.props.list
        const busy = loading || fetching

        const rowTemplate = <ListItem/>

        return <div>
            <List busy={busy} collection={collection} rowTemplate={rowTemplate} rowKeySelector="uid">
                <List.Header>Members :: Blacklist</List.Header>
                <List.Column>Name</List.Column>
                <List.Column>Blocked by</List.Column>
                <List.Column>Until</List.Column>
                <List.Column>Comment</List.Column>
            </List>
        </div>
    }
}

export default inject(({blacklist}) => {
    return {
        list: blacklist
    }
})(observer(BlacklistList))