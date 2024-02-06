import "./banner.css"
import "./menuCards.css"
import restaurant from "./assets/restaurant.jpg"
import greeksalad from "./assets/greek salad.jpg";
import bruschetta from "./assets/bruchetta.jpg";
import lemondessert from "./assets/lemon dessert.jpg"
import './main.css'

const greekSalad = {
    dishName: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
};

const bruchetta = {
    dishName: "Bruchetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
}

const lemonDessert = {
    dishName: "Lemon Dessert",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
}

function BannerSection() {
    return(
        <section className="banner-section">
            <section className="intro-section">
                <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>A family owned Mediterranean restaurant. Serving you traditional foods with a modern twist prepared by our highly-skilled chefs.</p>
                <button>Reserve a Table</button>
                </div>
            </section>
            <section className="landing-image">
                <span className="landing-image-container">
                    <img src={restaurant} alt="restaurant" title="Restaurant"/>
                </span>
            </section>
        </section>
    );
}

function MenuCard({dishName, description, price, image, alt}) {
    return(
        <div className="menu-card">
            <div className="dish-image">
                <img src={image} alt={alt} />
            </div>

            <div className="dish-info">
                <div>
                    <h2>{dishName}</h2>
                    <h2>{price}</h2>
                </div>
                <p>{description}</p>
                <h2>Order For Delivery</h2>
            </div>

        </div>
    );
}

function SpecialSection() {
    return(
        <section className="cards-section">
            <MenuCard dishName={greekSalad.dishName} price={greekSalad.price} description={greekSalad.description} image={greeksalad} alt={greekSalad.dishName}/>
            <MenuCard dishName={bruchetta.dishName} price={bruchetta.price} description={bruchetta.description} image={bruschetta} alt={bruchetta.dishName}/>
            <MenuCard dishName={lemonDessert.dishName} price={lemonDessert.price} description={lemonDessert.description} image={lemondessert} alt={lemonDessert.dishName}/>

        </section>
    );

}


export default function Main() {
    return(
        <main className="main-section">
            <BannerSection />
            <h1>Specials</h1>
            <SpecialSection />
        </main>
    );
}