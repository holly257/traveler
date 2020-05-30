import React from 'react';
import { Link } from 'react-router-dom'
import './SignUp.css'

function SignUp () {
    return (
        <section id='signup'>
            <div id='container'>
                <h3>Sign Up</h3>
                <br />
                <form>
                    <input type='text' placeholder='full name' required />
                    <input type='text' placeholder='password' required />
                    <input type='text' placeholder='username' required />
                    <input type='text' placeholder='email' required />
                    <input type='text' placeholder='profile pic' />
                    <br />
                    <button id='search-btn'>Submit</button>
                </form>
                <br />
                <Link to={'/login'}>Log In</Link>
            </div>
        </section>
    )
}

export default SignUp;