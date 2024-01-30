import logo from './assets/Logo.svg'

export default function Header() {
    return(
        <header>
            <img src={logo} alt='logo' title='Little Lemon'/>
        </header>
    );
}