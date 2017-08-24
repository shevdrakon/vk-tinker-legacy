import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

import inject from '../../../utils/inject'

import {Col} from 'react-bootstrap'

import LinearProgress from '../../../components/react-mdl/linear-progress.jsx'
import InputWithIcon from '../../../components/react-mdl/input-with-icon.jsx'
import Button from '../../../components/react-mdl/button.jsx'

import AboutAccessTokenModal from './about-access-token-modal.jsx'

import '../styles/style.scss'

export class LoginForm extends Component {

    static propTypes = {
        login: PropTypes.shape({
            showAboutAccessToken: PropTypes.bool,
            access_token: PropTypes.string,
            logging: PropTypes.bool,
            openVkPopup: PropTypes.func,
            onTokenChange: PropTypes.func,
            onLogin: PropTypes.func,
            validateAndLogin: PropTypes.func,
            openAboutAccessToken: PropTypes.func,
            closeAboutAccessToken: PropTypes.func
        })
    };

    handleClick = (e) => {
        e.preventDefault()

        this.props.login.openVkPopup()
    }

    handleTokenChange = (e) => {
        this.props.login.onTokenChange({value: e.target.value})
    }

    handleGetStartedClick = () => {
        const {logging} = this.props.login
        if (logging)
            return

        this.props.login.validateAndLogin()
    }

    // handleCloseAboutAccessToken = () => {
    //     this.props.login.closeAboutAccessToken()
    // }

    static load() {
    }

    render() {
        const {access_token, logging} = this.props.login

        return <div className="header header-filter">
            <div className="container">
                <div className="row">
                    <Col md={4} mdOffset={4} sm={6} smOffset={3}>
                        <div className="card card-signup">
                            <form className="form" method="" action="">
                                <div className="header header-primary text-center">
                                    <h3>Mommy's Treasure</h3>
                                    <div className="social-line">
                                        <a target="_blank" href="https://vk.com/maminsklad2015"
                                           className="btn btn-simple btn-just-icon">
                                            <i className="fa icon-vk"></i>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-divider">
                                    <a href="#" onClick={this.handleClick}>Click to request vk access_token</a>
                                    <AboutAccessTokenModal/>
                                </p>

                                <div className="content">
                                    <InputWithIcon icon="lock_outline" label="access_token"
                                                   placeholder="access_token"
                                                   value={access_token}
                                                   onChange={this.handleTokenChange}/>
                                </div>
                                <div className="footer text-center">
                                    <Button className="get-started-button" disabled={logging}
                                            onClick={this.handleGetStartedClick}>Get Started</Button>
                                    {logging && <LinearProgress/>}
                                </div>
                            </form>
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    }
}

export default inject(({loginForm}) => {
    return {
        login: loginForm
    }
})(observer(LoginForm))