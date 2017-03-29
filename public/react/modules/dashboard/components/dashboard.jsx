import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import {Navigation} from '../../../components/navigation/navigation-bar.jsx'
import PhotoCards from './photo-cards.jsx'

export class DashboardPage extends Component {
    static propTypes = {
        dashboard: PropTypes.shape({
            loading: PropTypes.bool,

            load: PropTypes.func
        })
    }

    /* eslint-disable no-empty-pattern */
    static load({}, {dashboard}) {
        dashboard.form.load()
    }
    /* eslint-enable no-empty-pattern */

    render() {
        return <div>
            <Navigation/>

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