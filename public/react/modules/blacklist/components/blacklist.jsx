import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import {Col} from 'react-bootstrap'

import {Navigation} from '../../../components/navigation/navigation-bar.jsx'
import List from './blacklist-list.jsx'

import '../styles/_styles.scss'

class Blacklist extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        fetchBlacklist: PropTypes.func
    }

    /* eslint-disable no-empty-pattern */
    static load({}, {blacklist}) {
        return blacklist.load()
    }

    /* eslint-enable no-empty-pattern */

    render() {
        return <div>
            <Navigation/>

            <div className="blacklist-container">
                <Col md={10} mdOffset={1}>
                    <List />
                </Col>
            </div>
        </div>
    }
}

export default inject(({blacklist}) => {
    return {
        list: blacklist
    }
})(observer(Blacklist))