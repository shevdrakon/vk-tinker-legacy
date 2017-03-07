import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

import {Navigation} from '../../../components/navigation/navigation-bar.jsx'

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
        </div>
    }
}

export default inject(({dashboard}) => {
    return {
        dashboard: dashboard.form
    }
})(observer(DashboardPage))