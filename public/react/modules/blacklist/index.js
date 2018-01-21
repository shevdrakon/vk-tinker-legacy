import {inject} from 'mobx-react'

import Root from './components/Root.jsx'
import Service from './blacklist-service'
import Store from './blacklist-store'

export default inject(({app}) => {
    app.extendStores({blacklist: Store})
    app.extendServices({blacklist: Service})
})(Root)