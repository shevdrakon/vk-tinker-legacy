import React, {Component, PropTypes} from 'react'

// import GlobalNavigation from './global-navigation.jsx'
// import HubNavigation from './hub-navigation.jsx'

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return <div>
            {/*<GlobalNavigation />*/}
            {/*<HubNavigation />*/}
            <section className="body">
                <div className="layout">
                    {this.props.children}
                </div>
            </section>
        </div>
    }
}