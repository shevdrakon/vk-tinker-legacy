import combineStores from './../../../base/combine-stores'
import DashboardStore from './dashboard-store'

export default (initialState, environment) => combineStores(initialState, environment)({
    form: DashboardStore
})