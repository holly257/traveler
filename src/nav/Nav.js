import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '../../node_modules/@fortawesome/free-solid-svg-icons'

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
                    <div id={`${hiddenDropdown ? 'nav-hide' : 'nav-show'}`} >
                        <Link onClick={this.toggleDropdown} className='nav-link' to={'/search'} >Search</Link>
                        <Link onClick={this.toggleDropdown} className='nav-link' to={'/new-review'} >Review</Link>
                        <Link onClick={this.toggleDropdown} className='nav-link' to={'/trip'} >Trips</Link>
                        <Link onClick={this.toggleDropdown} className='nav-link' to={'/new-trip'} >Plan</Link>
                        <Link onClick={this.toggleDropdown} className='nav-link' to={'/login'} >Login</Link>
                    </div>
                </span>
            </nav>
        )
    }
}

export default Nav;