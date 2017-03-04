import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
// import $ from 'jquery'

import inject from '../../../utils/inject'

import {Col} from 'react-bootstrap'
import {TextfieldWithIcon} from '../../../components/react-mdl/textfield-with-icon.jsx'

import '../styles/style.scss'

export class LoginForm extends Component {

    static propTypes = {
        login: PropTypes.shape({
            access_token: PropTypes.string,
            openVkPopup: PropTypes.func,
            onTokenChange: PropTypes.func,
            onLogin: PropTypes.func,
            validate: PropTypes.func
        })
    };

    handleClick = (e) => {
        e.preventDefault()

        this.props.login.openVkPopup()

        // $('form').animate({height: "toggle", opacity: "toggle"}, "slow")
    }

    handleTokenChange = (e) => {
        this.props.login.onTokenChange({value: e.target.value})
    }

    handleLoginClick = (e) => {
        e.preventDefault()

        this.props.login.validate()

        // this.form.submit()
    }

    static load() {
    }

    render() {
        // const {access_token} = this.props.login

        return <div className="header header-filter">
            <div className="container">
                <div className="row">
                    <Col md={4} mdOffset={4} sm={6} smOffset={3}>
                        <div className="card card-signup">
                            <form ref={f => this.form = f} className="form" method="POST" action="/login">
                                <div className="header header-primary text-center">
                                    <h3>Mommy's Treasure</h3>
                                    <div className="social-line">
                                        <a target="_blank" href="https://vk.com/maminsklad2015" className="btn btn-simple btn-just-icon">
                                            <i className="fa icon-vk"></i>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-divider">
                                    <a href="#" onClick={this.handleClick}>Click to request vk access_token</a>
                                </p>

                                <div className="content">
                                    <div className="input-group">
                                        <TextfieldWithIcon icon="lock_outline" label="access_token" style={{width: "100%"}} onChange={this.handleTokenChange}/>
                                    </div>
                                </div>
                                <div className="footer text-center">
                                    <a href="#pablo" className="btn btn-simple btn-primary btn-lg" onClick={this.handleLoginClick}>Get Started</a>
                                </div>
                            </form>
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    }
}

export default inject(({login}) => {
    return {
        login: login.form
    }
})(observer(LoginForm))