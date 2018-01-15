import {inject} from 'mobx-react'

import Store from './login-form-store'
import Service from './login-form-service'
import LoginForm from './components/login-form.jsx'

export default inject(({app}) => {
    app.extendStores({loginForm: Store})
    app.extendServices({login: Service})
})(LoginForm)