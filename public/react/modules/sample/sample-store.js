// import {action, observable} from 'mobx'

import SmartStore from './../../base/smart-store'

export default class SampleStore extends SmartStore {
    constructor(initialState, environment) {
        super(initialState, environment)
    }

    get collection() {
        return [{
            name: 'Ivan',
            country: 'Russia',
            city: 'Yaroslavl',
            salary: '18.000 rub.'
        }, {
            name: 'Hanso',
            country: 'Norway',
            city: 'Oslo',
            salary: '4.200 kr.'
        }]
    }
}