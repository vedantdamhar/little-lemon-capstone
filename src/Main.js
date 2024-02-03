import "./main.css"
import restaurant from "./assets/restaurant.jpg"

function HeroBanner() {
    return(
        <section className="heroBanner">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>A family owned Mediterranean restaurant. Serving you traditional foods with a modern twist prepared by our highly-skilled chefs.</p>
                <button>Reserve a Table</button>
            </div>
        </section>
    );
}

function LandingImage() {
    return(
        <section className="landing-image">
            <span className="landing-image-container">
                <img src={restaurant} alt="restaurant" title="Restaurant"/>
            </span>
        </section>
    );
}

export default function Main() {
    return(
        <main className="main-section">
            <HeroBanner />
            <LandingImage />
        </main>
    );
}