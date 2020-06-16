import React from 'react';
import { Link } from 'react-router-dom'
import './LogIn.css'
import LogIn from './LogIn'

class LogInPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }


    render() {
        return (
            <section id='login'>
                <div id='container'>
                    <h3 className='allItems'>Log In</h3>
                    <LogIn onLoginSuccess={this.handleLoginSuccess} />
                    <Link id='signup-link' className='allItems' to={'/signup'}>Sign Up</Link>
                </div>
            </section>
        )
    }
}

export default LogInPage;