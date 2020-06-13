import React from 'react';
import { Link } from 'react-router-dom'
import './LogIn.css'
import TokenService from '../services/token-service'

class LogIn extends React.Component {

    logInSubmit = e => {
        e.preventDefault()
        const { username, password } = e.target
        
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )
    }

    render() {
        return (
            <section id='login'>
                <div id='container'>
                    <h3 className='allItems'>Log In</h3>
                    <form onSubmit={(e) => this.logInSubmit(e)} className='allItems'>
                        <input 
                            className='allItems' 
                            type='text' 
                            name='username'
                            placeholder='username' 
                            required />
                        <input 
                            className='allItems' 
                            type='text' 
                            name='password'
                            placeholder='password' 
                            required />
                        <button className='allItems' type='submit' id='login-btn'>Submit</button>
                    </form>
                    <Link id='signup-link' className='allItems' to={'/signup'}>Sign Up</Link>
                </div>
            </section>
        )
    }
}

export default LogIn;