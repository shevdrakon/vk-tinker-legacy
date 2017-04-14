import React, {PropTypes, Component} from 'react'
import {observer, propTypes as mPropTypes} from 'mobx-react'
import inject from '../../../utils/inject'

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
            toggleSelect: PropTypes.func
        })
    }

    handleToggle = (payload) => {
        this.props.list.toggleSelect(payload)
    }

    render() {
        const {loading, fetching, collection, total, isAllSelected} = this.props.list
        const busy = loading || fetching

        const rowTemplate = <ListItem onToggle={this.handleToggle} />

        return <div>
            <List busy={busy} collection={collection} rowTemplate={rowTemplate} rowKeySelector="uid">
                <List.Header>
                    <PositiveBadge count={total}>Members :: Requests</PositiveBadge>
                </List.Header>

                <List.Column>
                    <input type="checkbox" checked={isAllSelected}/>
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