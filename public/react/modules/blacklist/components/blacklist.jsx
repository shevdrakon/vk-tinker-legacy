import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import {Col} from 'react-bootstrap'

import PageContainer from '../../../components/page-container.jsx'
import List from './blacklist-list.jsx'
import Pagination from '../../../components/pagination/pagination.jsx'

import '../styles/_styles.scss'

class Blacklist extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        fetchBlacklist: PropTypes.func,

        list: PropTypes.shape({
            pagesCount: PropTypes.number,
            activePage: PropTypes.number,
            selectPage: PropTypes.func
        })
    }

    /* eslint-disable no-empty-pattern */
    static load({}, {blacklist}) {
        return blacklist.load()
    }

    /* eslint-enable no-empty-pattern */

    handlePaginationSelect = ({value}) => {
        this.props.list.selectPage({value})
    }

    render() {
        const {pagesCount, activePage} = this.props.list

        return <PageContainer>
            <Col md={10} mdOffset={1}>
                <List />
                <Pagination prev next
                            items={pagesCount}
                            maxButtons={3}
                            activePage={activePage}
                            onSelect={this.handlePaginationSelect}/>
            </Col>
        </PageContainer>
    }
}

export default inject(({blacklist}) => {
    return {
        list: blacklist
    }
})(observer(Blacklist))