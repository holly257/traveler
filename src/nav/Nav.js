import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav () {
    return (
        <nav>
            <Link className='nav-link' to={'/'} >Welcome Traveler!</Link>
            <div>
                <Link className='nav-link' to={'/search'} >Search</Link>
                <Link className='nav-link' to={'/new-review'} >Review</Link>
                <Link className='nav-link' to={'/trip'} >Trips</Link>
                <Link className='nav-link' to={'/new-trip'} >Create</Link>
                <Link className='nav-link' to={'/login'} >Login</Link>
            </div>
        </nav>
    )
}

export default Nav;