import React, {Component} from 'react'
import {observer} from 'mobx-react'
import inject from '../../utils/inject'

import './style.scss'

export class LoginForm extends Component {

    handleClick = (e) => {
        e.preventDefault()

        // if ($('.login-form').is(':visible'))
        //     requestAccessToken();

        $('form').animate({height: "toggle", opacity: "toggle"}, "slow")
    }

    handleTokenChange = (e) => {
        this.props.login.onTokenChange({value: e.target.value})
    }

    handleLoginClick = (e) => {
        e.preventDefault()

        this.props.login.onLogin()
    }

    render() {
        return <div className="login-form-container">
            <div className="container">
                <div className="info">
                    <h1>Mommy's Treasure</h1>
                </div>
            </div>
            <div className="form">
                <button onClick={this.handleClick}
                        className="login mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i className="icon-vk"></i>
                </button>

                <form className="login-form">
                    Click to process vk api auth request
                </form>

                <form className="register-form">
                    <div style={{"display": "inline-block"}}>
                        <input onChange={this.handleTokenChange} placeholder="access_token"/>
                        <button onClick={this.handleLoginClick}
                                className="pull-right mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
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

export default inject(({login}) => {
    login
})(observer(LoginForm))