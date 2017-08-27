import React, {PropTypes, Component} from 'react'
import {observer, propTypes as mPropTypes} from 'mobx-react'
import inject from '../../../utils/inject'

import cn from 'classnames'

import Icon from '../../../components/react-mdl/icon.jsx'
import Button from '../../../components/react-mdl/button.jsx'
import Checkbox from '../../../components/react-mdl/checkbox.jsx'

import List from '../../../components/list/list.jsx'
import ListItem from './requests-list-item.jsx'

import PositiveBadge from '../../../components/react-mdl/positive-badge.jsx'
import BusyDots from '../../../components/busy-dots.jsx'

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
            isAllSelected: PropTypes.bool,
            approveSelected: PropTypes.func
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

    handleApproveSelected = () => {
        this.props.list.approveSelected()
    }

    render() {
        const {loading, fetching, collection, isAllSelected, selectedCollection} = this.props.list
        const {requestsCount} = this.props.status
        const busy = loading || fetching
        const disableApproveButton = busy || selectedCollection.length === 0

        const rowTemplate = <ListItem onToggle={this.handleToggle}/>
        const classes = cn({'list-busy': busy})

        return <div className="list">
            {busy && <div className="cover"><BusyDots/></div>}
            <List className={classes} collection={collection} rowTemplate={rowTemplate} rowKeySelector="id">
                <List.Header>
                    <PositiveBadge count={requestsCount}>Members :: Requests</PositiveBadge>
                    <div className="accept-selected-container">
                        <Button onClick={this.handleApproveSelected} disabled={disableApproveButton}>
                            <Icon>done_all</Icon>Accept
                        </Button>
                    </div>
                </List.Header>

                <List.Column className="checkbox-column">
                    <Checkbox checked={isAllSelected} onChange={this.handleToggleAll}/>
                </List.Column>

                <List.Column>Name</List.Column>
                <List.Column>Link</List.Column>
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