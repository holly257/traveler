import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { API_URL } from '../config';

class SignUp extends React.Component {
    state = {
        passwordError: null,
        emailError: null,
        serverError: null,
    };

    validatePass = password => {
        if (password.length < 7) {
            return 'Password must be longer than 7 characters';
        }
        if (password.length > 72) {
            return 'Password must be shorter than 72 characters';
        }
        if (password.startsWith(' ') || password.endsWith(' ')) {
            return 'Password must not start or end with an empty space';
        }
        if (!password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/)) {
            return 'Password must contain 1 upper case, lower case, number and special character';
        }
    };

    validateEmail = email => {
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            return 'Email not valid';
        }
    };

    signUpSubmit = e => {
        e.preventDefault();
        this.setState({
            passwordError: null,
            emailError: null,
            serverError: null,
        });
        const { fullname, password, username, email } = e.target;
        const newUser = {
            fullname: fullname.value,
            password: password.value,
            username: username.value,
            email: email.value,
        };

        if (newUser.password) {
            const passError = this.validatePass(newUser.password);
            if (passError) {
                this.setState({ passwordError: passError });
            }
        }
        if (newUser.email) {
            const emailErr = this.validateEmail(newUser.email);
            if (emailErr) {
                this.setState({ emailError: emailErr });
            }
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        };
        fetch(`${API_URL}/users`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                this.props.history.push('/login');
            })
            .catch(res => {
                console.error(res.error);
                this.setState({ serverError: res.error });
            });
    };

    render() {
        const { passwordError, emailError, serverError } = this.state;
        return (
            <section id="signup">
                <div id="container">
                    <h1 id="signup-title">Sign Up</h1>
                    <br />
                    <form onSubmit={e => this.signUpSubmit(e)}>
                        <label for="fullname" className="signup-label">
                            Name:{' '}
                        </label>
                        <input
                            className="allSignup"
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="full name"
                            required
                        />
                        <label for="password" className="signup-label">
                            Password:{' '}
                        </label>
                        <input
                            className="allSignup"
                            type="text"
                            name="password"
                            id="password"
                            placeholder="password"
                            required
                        />
                        <label for="username" className="signup-label">
                            Username:{' '}
                        </label>
                        <input
                            className="allSignup"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="username"
                            required
                        />
                        <label for="email" className="signup-label">
                            Email:{' '}
                        </label>
                        <input
                            className="allSignup"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="email"
                            required
                        />
                        <br />
                        <button className="allSignup" type="submit" id="signup-btn">
                            Submit
                        </button>
                    </form>
                    <div role="alert">
                        {passwordError && <p className="error">{passwordError}</p>}
                    </div>
                    <div role="alert">{emailError && <p className="error">{emailError}</p>}</div>
                    <div role="alert">{serverError && <p className="error">{serverError}</p>}</div>
                    <br />
                    <Link id="login-link" to={'/login'}>
                        Log In
                    </Link>
                </div>
            </section>
        );
    }
}

export default SignUp;
