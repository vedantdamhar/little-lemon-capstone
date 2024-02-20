import logoFooter from './assets/logo-footer.png';
import './footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer-section'>
            <div id='logo-footer'>
                <img src={logoFooter} alt='Little Lemon' title='Little Lemon' />
            </div>
            <div id='doormat-nav'>
                <div>
                    <h2>Navigation</h2>
                    <nav>
                        <ul>
                            <li><NavLink to='/' aria-label='Home' className="footer-nav-link">Home</NavLink></li>
                            <li><NavLink to='/future' aria-label='About' className="footer-nav-link">About</NavLink></li>
                            <li><NavLink to='/future' aria-label='Menu' className="footer-nav-link">Menu</NavLink></li>
                            <li><NavLink to="/booking" aria-label='Reservations' className="footer-nav-link">Reservations</NavLink></li>
                            <li><NavLink to="/future" aria-label='Order' className="footer-nav-link">Order</NavLink></li>
                            <li><NavLink to="/future" aria-label='Login' className="footer-nav-link">Login</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li><a href='tel:+123456789' aria-label='Phone Number'>Phone Number</a></li>
                        <li><a href='mailto:info@example.com' aria-label='Email Address'>Email Address</a></li>
                    </ul>
                </div>

                <div>
                    <h2>Social Media</h2>
                    <ul>
                        <li><a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>Facebook</a></li>
                        <li><a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>Instagram</a></li>
                        <li><a href='https://www.pinterest.com/' target='_blank' rel='noopener noreferrer' aria-label='Pinterest'>Pinterest</a></li>
                    </ul>
                </div>
            </div>
            <p>© 2024 Little Lemon Restaurant. All rights reserved.</p>
        </footer>
    );
}
