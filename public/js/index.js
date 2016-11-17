import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'

import App from './../react/components/app.jsx'
import Admin from './../react/components/admin.jsx'
import Genre from './../react/components/genre.jsx'
import Home from './../react/components/home.jsx'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='admin' component={Admin}/>
            <Route path='genre' component={Genre}/>
        </Route>
    </Router>,
    document.getElementById('root')
)