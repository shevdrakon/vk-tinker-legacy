import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import PageContainer from '../../../components/page-container.jsx'
import PhotoCards from './photo-cards.jsx'

export class DashboardPage extends Component {
    static propTypes = {
        dashboard: PropTypes.shape({
            load: PropTypes.func
        })
    }

    /* eslint-disable no-empty-pattern */
    static load({}, {dashboard}) {
        dashboard.form.load()
    }
    /* eslint-enable no-empty-pattern */

    render() {
        return <PageContainer>
                <PhotoCards />
        </PageContainer>
    }
}

export default inject(({dashboard}) => {
    return {
        dashboard: dashboard.form
    }
})(observer(DashboardPage))