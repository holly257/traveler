import React from 'react';
import './LogIn.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

class LogIn extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    logInSubmit = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { username, password } = e.target

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
                console.error(res)
                this.setState({ error: res.error ? res.error : 'Sorry, something went wrong.' })
            })
    }

    render() {
        const { error } = this.state
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
                <div role='alert'>
                    {error && <p className='error'>{error}</p>}
                </div>
            </>
        )
    }
}

export default LogIn;