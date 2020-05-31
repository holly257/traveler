import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
    state = {
        hiddenDropdown: true,
    };

    toggleDropdown = () => {
        this.setState(prevState => ({ 
            hiddenDropdown: !prevState.hiddenDropdown    
            }));
    };

    render() {
        const { hiddenDropdown } = this.state;    
        return (
            <nav>
                <Link className='nav-link' to={'/'} >Welcome Traveler!</Link>
                <span id='right-nav'>
                    <FontAwesomeIcon 
                        icon={hiddenDropdown ? faBars : faWindowClose}
                        id='nav-bars'
                        onClick={this.toggleDropdown}
                    />
                    <span id='nav-dropdown' id={`${hiddenDropdown ? 'nav-hide' : 'nav-show'}`} >
                        <Link className='nav-link' to={'/search'} >Search</Link>
                        <Link className='nav-link' to={'/new-review'} >Review</Link>
                        <Link className='nav-link' to={'/trip'} >Trips</Link>
                        <Link className='nav-link' to={'/new-trip'} >Create</Link>
                        <Link className='nav-link' to={'/login'} >Login</Link>
                    </span>
                </span>
            </nav>
        )
    }
}

export default Nav;