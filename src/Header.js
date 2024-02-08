import logo from './assets/Logo.svg'
import restaurant from "./assets/restaurant.jpg"
import "./banner.css"

export default function Header() {
    return(
        <header className='banner-section'>
            <section className="intro-section">
                <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>A family owned Mediterranean restaurant. Serving you traditional foods with a modern twist prepared by our highly-skilled chefs.</p>
                <button className="cta-button">Reserve a Table</button>
                </div>
            </section>
            <section className="landing-image">
                <img src={restaurant} alt="restaurant" title="Restaurant"/>
            </section>
        </header>
    );
}
