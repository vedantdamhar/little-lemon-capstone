import logoFooter from './assets/logo-footer.png'
import "./footer.css"

export default function Footer() {
    return(
        <footer className='footer-section'>
            <div id='logo-footer'>
                <img src={logoFooter} alt='logo' title='Little Lemon'/>
            </div>
            <div id='doormat-nav'>
                <div>
                    <h1>Navigation</h1>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <h1>Contact</h1>
                    <ul>
                        <li><a href='#'>Phone Number</a></li>
                        <li><a href='#'>Email Address</a></li>
                    </ul>
                </div>

                <div>
                    <h1>Social Media</h1>
                    <ul>
                        <li><a href='#'>Facebook</a></li>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>Pinterest</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}