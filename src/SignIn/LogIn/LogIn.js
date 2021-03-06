import React from 'react';
import './LogIn.css';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

class LogIn extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {},
    };

    state = { error: null };

    logInSubmit = e => {
        e.preventDefault();
        this.setState({ error: null });
        const { username, password } = e.target;

        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
            .then(res => {
                username.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                this.props.onLoginSuccess();
            })
            .catch(res => {
                this.setState({ error: res.error ? res.error : 'Sorry, something went wrong.' });
            });
    };

    render() {
        const { error } = this.state;
        return (
            <>
                <form onSubmit={e => this.logInSubmit(e)} className="allItems">
                    <label htmlFor="username" className="signup-label">
                        Username:{' '}
                    </label>
                    <input
                        className="allItems"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        required
                    />
                    <label htmlFor="password" className="signup-label">
                        Password:{' '}
                    </label>
                    <input
                        className="allItems"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        required
                    />
                    <button className="allItems button" type="submit" id="login-btn">
                        Submit
                    </button>
                </form>
                <div role="alert">{error && <p className="error">{error}</p>}</div>
            </>
        );
    }
}

export default LogIn;
