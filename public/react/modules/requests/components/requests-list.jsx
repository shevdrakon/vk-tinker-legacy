import React, {PropTypes, Component} from 'react'
import {observer, propTypes as mPropTypes} from 'mobx-react'
import inject from '../../../utils/inject'

import {Checkbox} from 'react-mdl'

import List from '../../../components/list/list.jsx'
import ListItem from './requests-list-item.jsx'

import PositiveBadge from '../../../components/react-mdl/positive-badge.jsx'

class RequestsList extends Component {
    static propTypes = {
        list: PropTypes.shape({
            total: PropTypes.number,
            loading: PropTypes.bool,
            fetching: PropTypes.bool,

            collection: mPropTypes.arrayOrObservableArray,
            selectedCollection: mPropTypes.arrayOrObservableArray,

            repeat: PropTypes.func,
            toggleSelect: PropTypes.func,
            toggleSelectAll: PropTypes.func,
            isAllSelected: PropTypes.bool
        })
    }

    handleToggle = (payload) => {
        this.props.list.toggleSelect(payload)
    }

    handleToggleAll = () => {
        this.props.list.toggleSelectAll()
    }

    render() {
        const {loading, fetching, collection, total, isAllSelected} = this.props.list
        const busy = loading || fetching

        const rowTemplate = <ListItem onToggle={this.handleToggle} />

        return <div>
            <List busy={busy} collection={collection} rowTemplate={rowTemplate} rowKeySelector="id">
                <List.Header>
                    <PositiveBadge count={total}>Members :: Requests</PositiveBadge>
                </List.Header>

                <List.Column>
                    <Checkbox checked={isAllSelected} onChange={this.handleToggleAll} ripple/>
                </List.Column>

                <List.Column>Name</List.Column>
            </List>
        </div>
    }
}

export default inject(({requests}) => {
    return {
        list: requests
    }
})(observer(RequestsList))