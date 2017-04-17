import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import {Col} from 'react-bootstrap'

import UserNavigation from '../../../components/navigation/user-navigation.jsx'
import PageContainer from '../../../components/page-container.jsx'
import List from './requests-list.jsx'
import Pagination from '../../../components/pagination/pagination.jsx'

import '../styles/_styles.scss'

class Requests extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        fetchRequests: PropTypes.func,
        list: PropTypes.shape({
            pagesCount: PropTypes.number,
            activePage: PropTypes.number,
            selectPage: PropTypes.func
        })
    }

    /* eslint-disable no-empty-pattern */
    static load({}, {requests}) {
        return requests.load()
    }

    /* eslint-enable no-empty-pattern */

    handlePaginationSelect = ({value}) => {
        this.props.list.selectPage({value})
    }

    render() {
        const {pagesCount, activePage} = this.props.list

        return <div className="page-container">
            <UserNavigation/>
            <PageContainer>
                <Col md={8} mdOffset={2}>
                    <List/>
                    <Pagination prev next
                                items={pagesCount}
                                maxButtons={3}
                                activePage={activePage}
                                onSelect={this.handlePaginationSelect}/>
                </Col>
            </PageContainer>
        </div>
    }
}

export default inject(({requests}) => {
    return {
        list: requests
    }
})(observer(Requests))