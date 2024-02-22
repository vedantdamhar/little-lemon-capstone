import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import hamburger from '../assets/hamburger.svg';
import '../styles/navbar.css';

export default function Nav() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenCloseMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className='nav-container'>
            <div className="navbar">
                <NavLink to='/' className='logo' aria-label="Home">
                    <img src={logo} alt="Little Lemon Restaurant" onError={(e) => e.target.style.display = 'none'} />
                </NavLink>
                <ul>
                    <li><NavLink to='/' className='nav-link'>Home</NavLink></li>
                    <li><NavLink to='/about' className='nav-link'>About</NavLink></li>
                    <li><NavLink to='/menu' className='nav-link'>Menu</NavLink></li>
                    <li><NavLink to="/booking" className='nav-link'>Reservations</NavLink></li>
                    <li><NavLink to="/order" className='nav-link'>Order</NavLink></li>
                    <li><NavLink to="/login" className='nav-link'>Login</NavLink></li>
                </ul>
                <button className='menu-icon' onClick={handleOpenCloseMenu} aria-label="Toggle Menu">
                    <img src={hamburger} alt='Menu' onError={(e) => e.target.style.display = 'none'} />
                </button>
            </div>

            <div className={`mobile-menu ${openMenu ? 'open' : ''}`}>
                <ul>
                    <li><NavLink to='/' className='mobile-nav-link' onClick={handleOpenCloseMenu}>Home</NavLink></li>
                    <li><NavLink to='/about' className='mobile-nav-link' onClick={handleOpenCloseMenu}>About</NavLink></li>
                    <li><NavLink to='/menu' className='mobile-nav-link' onClick={handleOpenCloseMenu}>Menu</NavLink></li>
                    <li><NavLink to="/booking" className='mobile-nav-link' onClick={handleOpenCloseMenu}>Reservations</NavLink></li>
                    <li><NavLink to="/order" className='mobile-nav-link' onClick={handleOpenCloseMenu}>Order</NavLink></li>
                    <li><NavLink to="/login" className='mobile-nav-link' onClick={handleOpenCloseMenu}>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

