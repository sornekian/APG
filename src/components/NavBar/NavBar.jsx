import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';
import LogoAPG from '../../assets/images/logo_small.png'
import React, { useState } from 'react';

export default function NavBar({ user, setUser }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }
      
      return (
        <nav className="navbar">
          <ul className={`menu-items ${isMobileMenuOpen ? 'show' : ''}`}>
            <li><Link className='logo' to='/'><img src={LogoAPG} alt="logo" /></Link></li>
            {user ? <li>Greetings, {user.name}</li> : null}
            <li><Link to="/scholarships">Scholarships</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/news">Business News</Link></li>
            <li><Link to="/jobs">Job Board</Link></li>
            {!user ? (
              <>
                <li><Link to="/signup">Become a Member</Link></li>
                <li><Link to="/login">Member Login</Link></li>
              </>
            ) : (
              <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
            )}
          </ul>
          <ul className={`menu-items-mobile ${isMobileMenuOpen ? 'show' : ''}`}>
            <li className="hamburger-menu" onClick={toggleMobileMenu}>
              &#9776;
            </li>
          </ul>
        </nav>
      );
            }       