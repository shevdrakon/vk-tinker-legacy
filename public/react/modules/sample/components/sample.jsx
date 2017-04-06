import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import {Col} from 'react-bootstrap'
import Title from './title.jsx'

import Navigation from '../../../components/navigation/navigation.jsx'
import SamplePictureCard from './sample-picture-card.jsx'
import SampleList from './sample-list.jsx'
import Checkboxes from './checkboxes.jsx'
import BusyDots from '../../../components/busy-dots.jsx'
import Pagination from '../../../components/pagination/pagination.jsx'
import SampleDropdown from './dropdown.jsx'

class Sample extends Component {

    static propTypes = {
        sample: PropTypes.shape({
            collection: PropTypes.array,
            activePage: PropTypes.number,
            setActivePage: PropTypes.func
        })
    }

    static load() {
    }

    handlePaginationSelect = ({value}) => {
        this.props.sample.setActivePage({value})
    }

    render() {
        const {collection, activePage} = this.props.sample

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
                <Title>Pagination</Title>
                <Pagination prev next items={10} activePage={activePage} maxButtons={3} onSelect={this.handlePaginationSelect}/>
                <Pagination prev next items={10} activePage={activePage} maxButtons={5} onSelect={this.handlePaginationSelect}/>
            </div>

            <div className="container">
                <Title>List</Title>
                <SampleList collection={collection}/>
            </div>

            <div className="container">
                <Title>Dropdown</Title>
                <SampleDropdown/>
            </div>

            <div className="container">
                <Title>Picture card</Title>
                <SamplePictureCard/>
            </div>


        </div>
    }
}

export default inject(({sample}) => {
    return {
        sample: sample
    }
})(observer(Sample))