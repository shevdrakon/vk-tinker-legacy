import combineStores from './../../../base/combine-stores'
import LoginFormStore from './login-form-store'

export default (initialState, environment) => combineStores(initialState, environment)({
    form: LoginFormStore,
})