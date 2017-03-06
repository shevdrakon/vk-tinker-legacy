import React, {Component, PropTypes} from 'react'
import inject from '../../../utils/inject'
import {observer} from 'mobx-react'

import {Layout, Content, Drawer, Navigation} from 'react-mdl'

import {NavigationHeader} from '../../../components/react-mdl/tinker-nav/components/tinker-nav.jsx'

export class DashboardPage extends Component{
    static propTypes = {
        dashboard: PropTypes.shape({
            collapsibleMenuShown: PropTypes.bool,
            onMenuClick: PropTypes.func
        })
    };

    static load() {
    }

    handleMenuButtonClick = () => {

        this.props.dashboard.onMenuClick();

        // this.form.submit()
    }

    render(){

        return (
        <div>
                <NavigationHeader onMenuClick={this.handleMenuButtonClick} menuShown={this.props.dashboard.collapsibleMenuShown}/>
        </div>
        )
    }
}

export default inject(({dashboard}) => {
    return {
        dashboard: dashboard.form
    }
})(observer(DashboardPage))