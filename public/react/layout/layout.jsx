import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Palette from '../components/react-mdl/palette.jsx'
// import GlobalNavigation from './global-navigation.jsx'
// import HubNavigation from './hub-navigation.jsx'

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return <Palette>
            {/*<GlobalNavigation />*/}
            {/*<HubNavigation />*/}
            <section className="body">
                <div className="layout">
                    {this.props.children}
                </div>
            </section>
        </Palette>
    }
}