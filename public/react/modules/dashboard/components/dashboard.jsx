import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import UserNavigation from '../../../components/navigation/user-navigation.jsx'
import PhotoCards from './photo-cards.jsx'

export class DashboardPage extends Component {
    static propTypes = {
        dashboard: PropTypes.shape({})
    }

    static load() {
    }

    render() {
        return <div>
            <UserNavigation/>

            <div className="under-navigation">
                <PhotoCards />
            </div>
        </div>
    }
}

export default inject(({dashboard}) => {
    return {
        dashboard: dashboard.form
    }
})(observer(DashboardPage))