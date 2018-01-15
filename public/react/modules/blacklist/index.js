import {inject} from 'mobx-react'

import Blacklist from './components/blacklist.jsx'
import Service from './blacklist-service'
import Store from './blacklist-store'

export default inject(({app}) => {
    app.extendStores({blacklist: Store})
    app.extendServices({blacklist: Service})
})(Blacklist)