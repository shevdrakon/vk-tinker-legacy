import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import UserNavigation from '../../../components/navigation/user-navigation.jsx'
import NavigationDropdown from '../../../components/navigation/navigation-dropdown.jsx'
import PageContainer from '../../../components/page-container.jsx'
import PhotoCards from './photo-cards.jsx'

export class DashboardPage extends Component {
    static propTypes = {
        dashboard: PropTypes.shape({
            load: PropTypes.func
        }),
        albums: PropTypes.shape(
            {
                load: PropTypes.func,
                collection: PropTypes.arrayOf(PropTypes.object),
                selected: PropTypes.object,
                select: PropTypes.func
            }
        )
    }

    /* eslint-disable no-empty-pattern */
    static load({}, {dashboard}) {
        dashboard.form.load()
        dashboard.albums.load()
    }
    /* eslint-enable no-empty-pattern */

    handleAlbumSelection = (eventKey) => {
        this.props.albums.select(eventKey)
    }

    render() {
        const {collection = [], selected} = this.props.albums
        const albums = [
            ...collection.map((album) => {
                return {
                    value: album.id,
                    title: album.title
                }
            })
        ]

        const hasAlbums = collection.length > 0

        return <div className="page-container">
            <UserNavigation>
                {hasAlbums && <NavigationDropdown
                    onSelect={this.handleAlbumSelection}
                    title={selected.title}>{albums}</NavigationDropdown>
                }
            </UserNavigation>
            <PageContainer>
                <PhotoCards />
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