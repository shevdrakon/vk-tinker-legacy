import 'babel-polyfill'
import React, {Component} from 'react'

import LoginForm from './login/login-form.jsx'
import Admin from './admin.jsx'
import Genre from './genre.jsx'
import Home from './home.jsx'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

export default class App extends Component {

    render() {
        return <Router history={browserHistory}>
            <Route path='/'>
                <IndexRoute component={Home}/>
                <Route path='/login' component={LoginForm}/>
                <Route path='admin' component={Admin}/>
                <Route path='genre' component={Genre}/>
            </Route>
        </Router>
    }
}