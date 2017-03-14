import {action, observable} from 'mobx'

import SmartStore from './../../base/smart-store'

export default class SampleStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    @observable activePage = 5

    get collection() {
        return [{
            name: 'Ivan',
            country: 'Russia',
            city: 'Yaroslavl',
            salary: '38.000 rub.'
        }, {
            name: 'Hanso',
            country: 'Norway',
            city: 'Oslo',
            salary: '4.200 kr.'
        }]
    }

    @action setActivePage = ({value}) => {
        this.activePage = value
    }
}