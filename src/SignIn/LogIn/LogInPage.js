import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import LogIn from './LogIn';

class LogInPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    };

    handleLoginSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/';
        history.push(destination);
    };

    render() {
        return (
            <section id="login">
                <div id="container">
                    <h1 id="login-title">Log In</h1>
                    <LogIn onLoginSuccess={this.handleLoginSuccess} />
                    <Link id="signup-link" className="allItems button" to={'/signup'}>
                        Sign Up
                    </Link>
                    <p className="login-demo login-demo-title">Demo Login: </p>
                    <p className="login-demo">test_user</p>
                    <p className="login-demo">Pa55w-rd</p>
                </div>
            </section>
        );
    }
}

export default LogInPage;
