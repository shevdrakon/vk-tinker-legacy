import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

import {Col} from 'react-bootstrap'

import {Navigation} from '../../../components/navigation/navigation-bar.jsx'
import List from '../../../components/list/list.jsx'

import inject from '../../../utils/inject'

export class DashboardPage extends Component {
    static propTypes = {
        dashboard: PropTypes.shape({
            collapsibleMenuShown: PropTypes.bool,
            onMenuClick: PropTypes.func
        })
    }

    static load() {
    }

    render() {
        return <div>
            <Navigation/>

            <Col md={10} mdOffset={1}>
                <List>
                    <List.Header title="Some test title" />
                </List>
            </Col>
        </div>
    }
}

export default inject(({dashboard}) => {
    return {
        dashboard: dashboard.form
    }
})(observer(DashboardPage))