import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import $ from 'jquery'

import inject from '../../../utils/inject'
// import '../styles/style.scss'

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
debugger
        return <div className="login-form-container">

            <div className="form">
                <button onClick={this.handleClick}
                        className="login mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i className="icon-vk"></i>
                </button>

                <div className="col-md-4 col-md-offset-4">
                    <div className="card card-signup">
                        <form className="form" method="" action="">
                            <div className="header header-primary text-center">
                                <h4>Mommy's Treasure</h4>
                                <div className="social-line">
                                    <a href="#pablo" className="btn btn-simple btn-just-icon">
                                        <i className="fa icon-vk"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="text-divider">Or Be Classical</p>
                            <div className="content">

                                <div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">face</i>
										</span>
                                    <div className="form-group is-empty"><input type="text" className="form-control"
                                                                                placeholder="First Name..."/><span
                                        className="material-input"></span></div>
                                </div>

                                <div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">email</i>
										</span>
                                    <div className="form-group is-empty"><input type="text" className="form-control"
                                                                                placeholder="Email..."/><span
                                        className="material-input"></span></div>
                                </div>

                                <div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">lock_outline</i>
										</span>
                                    <div className="form-group is-empty"><input type="password"
                                                                                placeholder="Password..."
                                                                                className="form-control"/><span
                                        className="material-input"></span></div>
                                </div>
                            </div>
                            <div className="footer text-center">
                                <a href="#pablo" className="btn btn-simple btn-primary btn-lg">Get Started</a>
                            </div>
                        </form>
                    </div>

                </div>

                <form className="login-form">Click to process vk api auth request</form>

                <form className="register-form">
                    <div>
                        <i className="material-icons">lock_outline</i>
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