import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {observer, PropTypes as mPropTypes} from 'mobx-react'
import inject from '../../../utils/inject'

import IconButton from '../../../components/react-mdl/icon-button.jsx'
import Badge from '../../../components/react-mdl/positive-badge.jsx'

import List from '../../../components/list/list.jsx'
import ListItem from './blacklist-list-item.jsx'

class BlacklistList extends Component {
    static propTypes = {
        list: PropTypes.shape({
            total: PropTypes.number,
            loading: PropTypes.bool,
            fetching: PropTypes.bool,
            collection: mPropTypes.arrayOrObservableArray,
            repeat: PropTypes.func
        })
    }

    handleRepeatClick = () => {
        this.props.list.repeat()
    }

    render() {
        const {loading, fetching, collection, total} = this.props.list
        const busy = loading || fetching

        const rowTemplate = <ListItem/>

        return <div>
            <List busy={busy} collection={collection} rowTemplate={rowTemplate} rowKeySelector="uid">
                <List.Header>
                    <Badge count={total}>Members :: Blacklist</Badge>
                    <IconButton onClick={this.handleRepeatClick} className="renew">
                        autorenew
                    </IconButton>
                </List.Header>
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