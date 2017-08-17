import React, {Component, PropTypes} from 'react'
import {observer, propTypes as mProptypes} from 'mobx-react'
import inject from '../../../utils/inject'

import Icon from '../../../components/react-mdl/icon.jsx'

import UserNavigation from '../../../components/navigation/user-navigation.jsx'
import PageContainer from '../../../components/page-container.jsx'
import PhotoCards from './photo-cards.jsx'
import AlbumSelect from './album-select/album-select.jsx'

export class DashboardPage extends Component {
    static propTypes = {
        dashboard: PropTypes.shape({
            load: PropTypes.func
        }),
        albums: PropTypes.shape(
            {
                load: PropTypes.func,
                collection: mProptypes.arrayOrObservableArray,
                selected: PropTypes.object,
                select: PropTypes.func,
                count: PropTypes.number
            }
        )
    }

    /* eslint-disable no-empty-pattern */
    static load({}, {dashboard}) {
        dashboard.form.load()
        dashboard.albums.load()
    }

    /* eslint-enable no-empty-pattern */

    render() {
        const {count} = this.props.albums
        const hasAlbums = count > 0

        return <div className="page-container">
            <UserNavigation>
                {hasAlbums && <AlbumSelect/>}
                <li>
                    <a className="nav-button"><Icon>filter_list</Icon></a>
                </li>
            </UserNavigation>
            <PageContainer>
                <PhotoCards/>
            </PageContainer>
        </div>
    }
}

export default inject(({dashboard}) => {
    return {
        dashboard: dashboard.form,
        albums: dashboard.albums
    }
})(observer(DashboardPage))