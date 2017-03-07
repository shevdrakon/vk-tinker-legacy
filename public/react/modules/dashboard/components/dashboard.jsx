import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

import inject from '../../../utils/inject'

import {Navigation} from '../../../components/navigation/navigation-bar.jsx'
import PictureCard from '../../../components/react-mdl/picture-card.jsx'

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
            <PictureCard imgLink="https://ya.ru" imgSrc="http://www.getmdl.io/assets/demos/welcome_card.jpg" cardText="Lorem ipsum tram pam pam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."/>
        </div>
    }
}

export default inject(({dashboard}) => {
    return {
        dashboard: dashboard.form
    }
})(observer(DashboardPage))