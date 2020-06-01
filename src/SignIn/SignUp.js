import React from 'react';
import { Link } from 'react-router-dom'
import './SignUp.css'

function SignUp () {
    return (
        <section id='signup'>
            <div id='container'>
                <h3 id='signup-title' >Sign Up</h3>
                <br />
                <form>
                    <input 
                        className='allSignup' 
                        type='text' 
                        placeholder='full name' 
                        required />
                    <input 
                        className='allSignup' 
                        type='text' 
                        placeholder='password' 
                        required />
                    <input 
                        className='allSignup' 
                        type='text' 
                        placeholder='username' 
                        required />
                    <input 
                        className='allSignup' 
                        type='text' 
                        placeholder='email' 
                        required />
                    <input 
                        className='allSignup' 
                        type='text' 
                        placeholder='profile pic' />
                    <br />
                    <button className='allSignup' id='signup-btn'>Submit</button>
                </form>
                <br />
                <Link id='login-link' to={'/login'}>Log In</Link>
            </div>
        </section>
    )
}

export default SignUp;