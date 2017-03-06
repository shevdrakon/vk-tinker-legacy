import React, {Component, PropTypes} from 'react'
import inject from '../../../utils/inject'
import {observer} from 'mobx-react'

import {Navigation} from '../../../components/react-mdl/navbar.jsx'

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
            <Navigation/>
        </div>
        )
    }
}

export default inject(({dashboard}) => {
    return {
        dashboard: dashboard.form
    }
})(observer(DashboardPage))