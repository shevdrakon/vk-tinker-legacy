import React, {PropTypes, Component} from 'react'
import {observer, propTypes as mPropTypes} from 'mobx-react'
import inject from '../../../utils/inject'

import {Checkbox} from 'react-mdl'
import {Button} from 'react-bootstrap'

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
        }),
        status: PropTypes.shape({
            requestsCount: PropTypes.number
        })
    }

    handleToggle = (payload) => {
        this.props.list.toggleSelect(payload)
    }

    handleToggleAll = () => {
        this.props.list.toggleSelectAll()
    }

    render() {
        const {loading, fetching, collection, isAllSelected} = this.props.list
        const {requestsCount} = this.props.status
        const busy = loading || fetching

        const rowTemplate = <ListItem onToggle={this.handleToggle}/>

        return <div>
            <List busy={busy} collection={collection} rowTemplate={rowTemplate} rowKeySelector="id">
                <List.Header>
                    <PositiveBadge count={requestsCount}>Members :: Requests</PositiveBadge>
                    <div className="accept-selected-container">
                        <Button className="btn-white accept-selected">Accept selected</Button>
                    </div>
                </List.Header>

                <List.Column className="checkbox-column">
                    <Checkbox checked={isAllSelected} onChange={this.handleToggleAll} ripple/>
                </List.Column>

                <List.Column>Name</List.Column>
            </List>
        </div>
    }
}

export default inject(({requests, application}) => {
    return {
        list: requests,
        status: application.status
    }
})(observer(RequestsList))