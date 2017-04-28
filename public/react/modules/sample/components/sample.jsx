import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import inject from '../../../utils/inject'

import {Col} from 'react-bootstrap'
import Title from './title.jsx'

import Navigation from './navigation.jsx'
import SamplePictureCollection from './sample-picture-collection.jsx'
import SampleList from './sample-list.jsx'
import Checkboxes from './checkboxes.jsx'
import BusyDots from '../../../components/busy-dots.jsx'
import Pagination from '../../../components/pagination/pagination.jsx'
import SampleDropdown from './dropdown.jsx'
import PageContainer from './page-container.jsx'
import SampleModal from './modal.jsx'
import SampleModalDropdown from './modal-select.jsx'

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

        return <div className="page-container">
            <Navigation/>

            <PageContainer>
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
                    <Pagination prev next items={10} activePage={activePage} maxButtons={3}
                                onSelect={this.handlePaginationSelect}/>
                    <Pagination prev next items={10} activePage={activePage} maxButtons={5}
                                onSelect={this.handlePaginationSelect}/>
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
                    <SamplePictureCollection/>
                </div>

                <div className="container">
                    <Title>Modal</Title>
                    <SampleModal/>
                </div>

                <div className="container">
                    <Title>ModalDropdown</Title>
                    <SampleModalDropdown/>
                </div>
            </PageContainer>
        </div>
    }
}

export default inject(({sample}) => {
    return {
        sample: sample
    }
})(observer(Sample))