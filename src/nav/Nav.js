import React from 'react';
import { Route, Link } from 'react-router-dom'
import './Nav.css'

function Nav () {
    return (
        <nav>
            <Link to={'/'} >Welcome Traveler!</Link>
            <div>
                <Link to={'/search'} >Search</Link>
                <Link to={'/new-review'} >Review</Link>
                <Link to={'/trip'} >Trips</Link>
                <Link to={'/new-trip'} >Create</Link>
                <Link to={'/login'} >Login</Link>
            </div>
        </nav>
    )
}

export default Nav;