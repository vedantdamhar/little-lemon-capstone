import "./menuCards.css"
import "./reviews.css"
import "./about.css"
import greeksalad from "./assets/greek salad.jpg";
import bruschetta from "./assets/bruchetta.jpg";
import lemondessert from "./assets/lemon dessert.jpg"
import fivestars from "./assets/fivestars.jpg"
import chris from "./assets/chris.jpg"
import alex from "./assets/alex.jpg"
import claire from "./assets/claire.jpg"
import jennifer from "./assets/jennifer.jpg"
import chefsA from "./assets/Mario and Adrian A.jpg"
import chefsB from "./assets/Mario and Adrian b.jpg"
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

const chrisReview = {
    name: "Chris",
    review: '"Amazing service and atmosphere."'
}

const alexReview = {
    name: "Alex",
    review: '"Discovered a new place in my area, meals were yummy!"'
}

const claireReview = {
    name: "Claire",
    review: '"Lovely presentation, flavors were phenomenal."'
}

const jenniferReview = {
    name: "Jennifer",
    review: '"One of my favorite places - love to bring my family here!"'
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

function ReviewCard({personName, personImage, personReview}) {
    return(
        <div className="review-container">
            <div>
                <img src={fivestars} alt="stars" />
            </div>
            <div className="person-heading">
                <img src={personImage} alt="person image" />
                <p>{personName}</p>
            </div>
            <div>
                <p>{personReview}</p>
            </div>
        </div>
    );
}

function ReviewSection() {
    return(
        <section className="review-section">
            <h1>Testimonials</h1>
            <section className="review-cards">
                <ReviewCard personImage={chris} personName={chrisReview.name} personReview={chrisReview.review}/>
                <ReviewCard personImage={alex} personName={alexReview.name} personReview={alexReview.review}/>
                <ReviewCard personImage={claire} personName={claireReview.name} personReview={claireReview.review}/>
                <ReviewCard personImage={jennifer} personName={jenniferReview.name} personReview={jenniferReview.review}/>
            </section>

        </section>
    );
}

function AboutSection() {
    return(
        <section className="about-section">
            <div className="about-info">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic
                    cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                    The restaurant was first founded and opened in Chicago by the best friends, Mario and Adrian. With the current rise
                    in business, they are in the process of opening another branch at another location!
                </p>
            </div>
            <div className="about-photos">
                <img id="chefA" src={chefsA} alt="adrian and mario" />
                <img id="chefB" src={chefsB} alt="adrian and mario" />
            </div>
        </section>
    );
}


export default function Main() {
    return(
        <main className="main-section">
            <div className="section-title">
                <h1>Specials</h1>
                <button className="menu-button">Online Menu</button>
            </div>
            <SpecialSection />
            <ReviewSection />
            <AboutSection />
        </main>
    );
}