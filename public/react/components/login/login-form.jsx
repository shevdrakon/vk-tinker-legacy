import React, {Component} from 'react'

import './style.scss'

class LoginForm extends Component {

    render() {
        return <div className="login-form-container">
            <div className="container">
                <div className="info">
                    <h1>Mommy's Treasure</h1>
                </div>
            </div>
            <div className="form">
                <button
                    className="login mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i className="icon-vk"></i>
                </button>

                <form className="login-form">
                    Click to process vk api auth request
                </form>

                <form action="/login" method="post" className="register-form">
                    <div style={{"display": "inline-block"}}>
                        <input name="access_token" type="access_token" placeholder="access_token"/>
                        <button type="submit" className="go pull-right mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                            <i className="icon-chevron-right"></i>
                        </button>
                    </div>
                </form>
            </div>

            <div id="overlay">
                262144
                106168410
            </div>
        </div>
    }
}

module.exports = LoginForm