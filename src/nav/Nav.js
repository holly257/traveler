import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import TokenService from '../services/token-service'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faBars, faWindowClose, faPlaneDeparture } from '../../node_modules/@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
    state = {
        hiddenDropdown: true,
    };

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <>
                <Link
                className='nav-link'
                onClick={this.handleLogoutClick}
                to='/'>
                Log Out
                </Link>
            </>
        )
      }
    
    renderLoginLink() {
        return (
            <>
                <Link 
                className='nav-link'
                to='/signup'>
                Sign Up
                </Link>
                <Link 
                className='nav-link'
                to='/login'>
                Log In
                </Link>
            </>
        )
    }

    toggleDropdown = () => {
        this.setState(prevState => ({ 
            hiddenDropdown: !prevState.hiddenDropdown    
            }));
    };

    render() {
        const { hiddenDropdown } = this.state;    
        return (
            <nav>
                <Link className='nav-link' to={'/'} ><FontAwesomeIcon icon={faPlaneDeparture} /></Link>
                <span id='right-nav'>
                    <FontAwesomeIcon 
                        icon={hiddenDropdown ? faBars : faWindowClose}
                        id='nav-bars'
                        onClick={this.toggleDropdown}
                    />
                    <div id={`${hiddenDropdown ? 'nav-hide' : 'nav-show'}`} >
                        <Link onClick={this.toggleDropdown} className='nav-link' to={'/search'} >Search</Link>
                        <Link onClick={this.toggleDropdown} className='nav-link' to={'/review'} >Reviews</Link>
                        <Link onClick={this.toggleDropdown} className='nav-link' to={'/trip'} >Trips</Link>
                        <p onClick={this.toggleDropdown} className='nav-auth' to={TokenService.hasAuthToken() ? '/' : '/login'} >
                            {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}</p>
                    </div>
                </span>
            </nav>
        )
    }
}

export default Nav;