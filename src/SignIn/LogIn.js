import React from 'react';
import { Link } from 'react-router-dom'
import './LogIn.css'

function LogIn () {
    return (
        <section id='login'>
            <div id='container'>
            <h3>Log In</h3>
            <br />
            <form>
                <input type='text' placeholder='username' required />
                <input type='text' placeholder='password' required />
                <br />
                <button id='search-btn'>Submit</button>
            </form>
            <br />
            <Link to={'/signup'}>Sign Up</Link>
            </div>
        </section>
    )
}

export default LogIn;