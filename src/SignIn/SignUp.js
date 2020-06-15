import React from 'react';
import { Link } from 'react-router-dom'
import './SignUp.css'
import { API_URL } from '../config'

class SignUp extends React.Component {
    signUpSubmit = e => {
        e.preventDefault()
        const { fullname, password, username, email } = e.target
        const newUser = {
            fullname: fullname.value, 
            password: password.value, 
            username: username.value, 
            email: email.value,
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser),   
        }
        fetch(`${API_URL}/users`, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again soon.')
                }
            return res.json()
        })
        .then(data => {
            this.props.history.push('/login')
        })
        .catch(error => {
            console.error(error)
            this.setState({ error: 'The user did not add. Please try again later.'});
        })
        
    }

    render() {
        return (
            <section id='signup'>
                <div id='container'>
                    <h3 id='signup-title' >Sign Up</h3>
                    <br />
                    <form onSubmit={(e) => this.signUpSubmit(e)}>
                        <input 
                            className='allSignup' 
                            type='text'
                            name='fullname' 
                            placeholder='full name' 
                            required />
                        <input 
                            className='allSignup' 
                            type='text' 
                            name='password'
                            placeholder='password' 
                            required />
                        <input 
                            className='allSignup' 
                            type='text'
                            name='username' 
                            placeholder='username' 
                            required />
                        <input 
                            className='allSignup' 
                            type='text' 
                            name='email'
                            placeholder='email' 
                            required />
                        <br />
                        <button className='allSignup' type='submit' id='signup-btn'>Submit</button>
                    </form>
                    <br />
                    <Link id='login-link' to={'/login'}>Log In</Link>
                </div>
            </section>
        )
    }
}

export default SignUp;