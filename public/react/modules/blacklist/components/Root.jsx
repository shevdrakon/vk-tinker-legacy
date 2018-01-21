import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {inject, observer} from 'mobx-react'

import {Grid} from 'material-ui'

import AppBar from '../../../components/app-bar/app-bar.jsx'
import UserNavigation from '../../../components/navigation/user-navigation.jsx'
import PageContainer from '../../../components/page-container.jsx'
import List from './blacklist-list.jsx'
// import Pagination from '../../../components/pagination/pagination.jsx'

import '../styles/_styles.scss'

class Root extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        fetchBlacklist: PropTypes.func,

        list: PropTypes.shape({
            pagesCount: PropTypes.number,
            activePage: PropTypes.number,
            selectPage: PropTypes.func
        })
    }

    handlePaginationSelect = ({value}) => {
        this.props.list.selectPage({value})
    }

    componentWillMount() {
        this.props.list.load()
    }

    render() {
        //const {pagesCount, activePage} = this.props.list

        return <div className="page-container">
            <AppBar/>
            <UserNavigation/>
            <PageContainer>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        test here
                        <List />
                    </Grid>
                    {/*<Pagination prev next*/}
                    {/*items={pagesCount}*/}
                    {/*maxButtons={3}*/}
                    {/*activePage={activePage}*/}
                    {/*onSelect={this.handlePaginationSelect}/>*/}
                </Grid>
            </PageContainer>
        </div>
    }
}

export default inject(({store: {blacklist, application: {user}}}) => {
    return {
        user,
        list: blacklist
    }
})(observer(Root))