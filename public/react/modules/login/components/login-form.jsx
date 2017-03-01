import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

import $ from 'jquery'

import inject from '../../../utils/inject'

import '../styles/style.scss'

export class LoginForm extends Component {

    static propTypes = {
        login: PropTypes.shape({
            access_token: PropTypes.string,
            showLoginButton: PropTypes.bool,
            toggle: PropTypes.func,
            onTokenChange: PropTypes.func,
            onLogin: PropTypes.func
        })
    };

    handleClick = (e) => {
        e.preventDefault()

        this.props.login.toggle({value: !this.props.login.showLoginButton})

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

    static load() {
    }

    render() {
        const {access_token} = this.props.login

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

                <form className="login-form">Click to process vk api auth request</form>

                <form className="register-form">
                    <div>
                        <input onChange={this.handleTokenChange} placeholder="access_token" value={access_token}/>
                        <button onClick={this.handleLoginClick}
                                className="pull-right mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                            <i className="icon-chevron-right"></i>
                        </button>
                    </div>
                </form>
            </div>

            <div id="overlay"></div>
        </div>
    }
}

export default inject(({login}) => {
    return {
        login: login.form
    }
})(observer(LoginForm))