import React from 'react';
import { Link } from 'react-router-dom'
import './LogIn.css'

function LogIn () {
    return (
        <section id='login'>
            <div id='container'>
                <h3 className='allItems'>Log In</h3>
                <form className='allItems'>
                    <input 
                        className='allItems' 
                        type='text' 
                        placeholder='username' 
                        required 
                    />
                    <input 
                        className='allItems' 
                        type='text' 
                        placeholder='password' 
                        required 
                    />
                    <button className='allItems' id='login-btn'>Submit</button>
                </form>
                <Link id='signup-link' className='allItems' to={'/signup'}>Sign Up</Link>
            </div>
        </section>
    )
}

export default LogIn;