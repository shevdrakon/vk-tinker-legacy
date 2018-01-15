import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react'

import {Grid} from 'material-ui'

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
            validateAndLogin: PropTypes.func
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

    render() {
        const {access_token, logging} = this.props.login

        return <div className="header header-filter">
            <div className="container">
                <div className="row">
                    <Grid container justify="center">
                        <Grid item xs={4}>
                            <div className="card card-signup">
                                <div className="header header-primary text-center">
                                    <h3>{'Mommy\'s Treasure'}</h3>
                                    <div className="social-line">
                                        <a target="_blank" rel="noopener noreferrer"
                                           href="https://vk.com/maminsklad2015"
                                           className="btn btn-simple btn-just-icon">
                                            <i className="fa icon-vk"></i>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-divider">
                                    <a href="#" onClick={this.handleClick}>Click to request vk access_token</a>
                                    <AboutAccessTokenModal/>
                                </p>

                                <Grid container justify="center" spacing={0}>
                                    <Grid item xs={10}>
                                        <InputWithIcon icon="lock_outline" label="access_token"
                                                       placeholder="access_token"
                                                       fullWidth
                                                       value={access_token}
                                                       onChange={this.handleTokenChange}/>
                                    </Grid>
                                    <Grid item>
                                        <Button className="get-started-button" disabled={logging}
                                                onClick={this.handleGetStartedClick}>Get Started</Button>
                                    </Grid>
                                </Grid>
                                {logging && <LinearProgress/>}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    }
}

export default inject(({store: {loginForm}}) => {
    return {
        login: loginForm
    }
})(observer(LoginForm))