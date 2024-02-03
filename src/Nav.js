import logo from './assets/Logo .svg'
import './navbar.css'
import hamburger from './assets/hamburger.svg';
import { useEffect, useState } from 'react';

export default function Nav() {
    const [openMenu, setOpenMenu] = useState(false);
    function handleOpenMenu() {
        setOpenMenu(!openMenu);
    }
    return(
        <div>
            <nav className="navbar">
                <a href="#" className='logo'><img src={logo} alt="logo" title='Little Lemon Restaurant'/></a>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">RESERVATIONS</a></li>
                    <li><a href="#">ORDER</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
                <a className='menu-icon'><img src={hamburger} alt='menu icon' onClick={handleOpenMenu}/></a>
            </nav>

            
          <div className={`mobile-menu ${openMenu ? 'open' : ''}`}>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">RESERVATIONS</a></li>
            <li><a href="#">ORDER</a></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
          </div>
    
        </div>
    );
}