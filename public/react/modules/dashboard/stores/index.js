import combineStores from './../../../base/combine-stores'

import DashboardStore from './dashboard-store'
import AlbumsStore from './albums-store'

export default (initialState, environment) => combineStores(initialState, environment)({
    form: DashboardStore,
    albums: AlbumsStore
})