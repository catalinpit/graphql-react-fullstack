import React, { Component } from 'react';
import { AUTH_TOKEN } from '../constants';

class Login extends Component {
    state = {
        // Switch between login and signup
        login: true,
        email: '',
        username: '',
        password: '',
    }

    render() {
        const { login, email, username, password } = this.state;

        return (
            <div>
                <h4 className="mv3">{login ? 'Login' : 'SignUp'}</h4>
                <div className="flex flex-column">
                    {!login && (
                        <input
                            value={username}
                            onChange={e => this.setState({ name: e.target.value })}
                            type="text"
                            placeholder="Your name"
                        />
                    )}
                    <input
                        value={email}
                        onChange={e => this.setState({ name: e.target.value })}
                        type="text"
                        placeholder="Your email address"
                    />
                    <input
                        value={password}
                        onChange={e => this.setState({ name: e.target.value })}
                        type="text"
                        placeholder="Your password"
                    />
                </div>
                <div className="flex mt3">
                    <div className="pointer mr2 button" onClick={() => this._confirm()}>
                        {login ? 'Login' : 'Create account'}
                    </div>
                    <div className="pointer button" onClick={() => this.setState({ login: !login })}>
                        {login ? 'Need to create an account?' : 'Already have an account?'}
                    </div>
                </div>
            </div>
        )
    }

    _confirm = async () => {

    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token);
    }
}

export default Login;