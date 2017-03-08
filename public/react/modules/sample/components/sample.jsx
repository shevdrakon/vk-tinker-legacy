import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

import {Col} from 'react-bootstrap'
import Title from './title.jsx'

import {Navigation} from '../../../components/navigation/navigation-bar.jsx'
import SampleList from './sample-list.jsx'
import Checkboxes from './checkboxes.jsx'

import BusyDots from '../../../components/busy-dots.jsx'

import inject from '../../../utils/inject'

class Sample extends Component {
    static propTypes = {
        sample: PropTypes.shape({
            collection: PropTypes.array
        })
    }

    static load() {
    }

    render() {
        const {collection} = this.props.sample

        return <div>
            <Title>Navigation</Title>
            <Navigation/>

            <div className="container">
                <Title>BusyDots</Title>
                <BusyDots/>
            </div>

            <div className="container">
                <Col sm={3}>
                    <Title>Checkboxes</Title>
                    <Checkboxes/>
                </Col>
            </div>

            <div className="container">
                <Title>List</Title>
                <SampleList collection={collection}/>
            </div>
        </div>
    }
}

export default inject(({sample}) => {
    return {
        sample: sample
    }
})(observer(Sample))