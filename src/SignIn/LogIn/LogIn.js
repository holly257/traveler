import React from 'react';
import { Link } from 'react-router-dom'
import './LogIn.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

class LogIn extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    logInSubmit = e => {
        e.preventDefault()
        const { username, password } = e.target
        
        // TokenService.saveAuthToken(
        //     TokenService.makeBasicAuthToken(username.value, password.value)
        // )

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
        
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => this.logInSubmit(e)} className='allItems'>
                    <input 
                        className='allItems' 
                        type='text' 
                        name='username'
                        placeholder='username' 
                        required />
                    <input 
                        className='allItems' 
                        type='password' 
                        name='password'
                        placeholder='password' 
                        required />
                    <button className='allItems' type='submit' id='login-btn'>Submit</button>
                </form>
            </>
        )
    }
}

export default LogIn;