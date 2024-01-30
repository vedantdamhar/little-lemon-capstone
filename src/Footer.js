import logo from './assets/Logo.svg'

export default function Footer() {
    return(
        <footer>
            <img src={logo} alt='logo' title='Little Lemon'/>
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
                <a href='#'>Phone Number</a>
                <a href='#'>Email Address</a>
            </div>

            <div>
                <h1>Social Media</h1>
                <a href='#'>Facebook</a>
                <a href='#'>Instagram</a>
                <a href='#'>Pinterest</a>
            </div>
        </footer>
    );
}