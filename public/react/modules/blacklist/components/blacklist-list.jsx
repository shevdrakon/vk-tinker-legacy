import React, {PropTypes, Component} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import List from '../../../components/list/list.jsx'

class BlacklistList extends Component {
    static propTypes = {
        list: PropTypes.shape({
            loading: PropTypes.bool,
            fetching: PropTypes.bool
        })
    }

    render() {
        const {loading, fetching} = this.props.list
        const busy = loading || fetching

        return <div>
            <List busy={busy}>
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