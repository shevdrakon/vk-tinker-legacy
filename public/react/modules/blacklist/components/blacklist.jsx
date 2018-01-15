import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {inject, observer} from 'mobx-react'

import AppBar from '../../../components/app-bar/app-bar.jsx'
import UserNavigation from '../../../components/navigation/user-navigation.jsx'
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

    // /* eslint-disable no-empty-pattern */
    // static load({}, {blacklist}) {
    //     return blacklist.load()
    // }
    //
    // /* eslint-enable no-empty-pattern */

    handlePaginationSelect = ({value}) => {
        this.props.list.selectPage({value})
    }

    render() {
        //const {pagesCount, activePage} = this.props.list

        return <div className="page-container">
            <AppBar/>
            <UserNavigation/>
            {/*<PageContainer>*/}
            {/*<Col md={10} mdOffset={1}>*/}
            {/*<List />*/}
            {/*<Pagination prev next*/}
            {/*items={pagesCount}*/}
            {/*maxButtons={3}*/}
            {/*activePage={activePage}*/}
            {/*onSelect={this.handlePaginationSelect}/>*/}
            {/*</Col>*/}
            {/*</PageContainer>*/}
        </div>
    }
}

export default inject(({blacklist}) => {
    return {}

    // return {
    //     list: blacklist
    // }
})(observer(Blacklist))