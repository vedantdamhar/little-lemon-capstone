import React from "react";
import greekSalad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.jpg";
import lemonDessert from "../assets/lemon dessert.jpg";
import fivestars from "../assets/fivestars.png";
import chris from "../assets/chris.jpg";
import alex from "../assets/alex.jpg";
import claire from "../assets/claire.jpg";
import jennifer from "../assets/jennifer.jpg";
import chefsA from "../assets/Mario and Adrian A.jpg";
import chefsB from "../assets/Mario and Adrian b.jpg";
import { NavLink } from "react-router-dom";
import "../styles/main.css";
import "../styles/menuCards.css";
import "../styles/reviews.css";
import "../styles/about.css";

const greekSaladData = {
    dishName: "Greek Salad",
    description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    image: greekSalad,
    alt: "Greek Salad"
};

const bruschettaData = {
    dishName: "Bruschetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
    image: bruschetta,
    alt: "Bruschetta"
};

const lemonDessertData = {
    dishName: "Lemon Dessert",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
    image: lemonDessert,
    alt: "Lemon Dessert"
};

const reviewsData = [
    { name: "Chris", image: chris, review: "Amazing service and atmosphere." },
    { name: "Alex", image: alex, review: "Discovered a new place in my area, meals were yummy!" },
    { name: "Claire", image: claire, review: "Lovely presentation, flavors were phenomenal." },
    { name: "Jennifer", image: jennifer, review: "One of my favorite places - love to bring my family here!" }
];

const MenuCard = ({ dishName, description, price, image, alt }) => (
    <div className="menu-card">
        <div className="dish-image">
            <img src={image} alt={alt} onError={(e) => e.target.src = '/path/to/placeholder.jpg'} />
        </div>
        <div className="dish-info">
            <div>
                <h3>{dishName}</h3>
                <h3 id="price-tag">{price}</h3>
            </div>
            <p>{description}</p>
            <button aria-label="Order For Delivery">Order For Delivery</button>
        </div>
    </div>
);

const SpecialSection = () => (
    <section className="cards-section">
        <MenuCard {...greekSaladData} />
        <MenuCard {...bruschettaData} />
        <MenuCard {...lemonDessertData} />
    </section>
);

const ReviewCard = ({ name, image, review }) => (
    <div className="review-container">
        <div className="review-stars">
            <img src={fivestars} alt="stars" />
        </div>
        <div className="person-heading">
            <img src={image} alt={`${name} profile`} onError={(e) => e.target.src = '/path/to/defaultProfile.jpg'} />
            <p>{name}</p>
        </div>
        <div>
            <p>{review}</p>
        </div>
    </div>
);

const ReviewSection = () => (
    <section className="review-section">
        <h2>Testimonials</h2>
        <section className="review-cards">
            {reviewsData.map(({ name, image, review }) => (
                <ReviewCard key={name} name={name} image={image} review={review} />
            ))}
        </section>
    </section>
);

const AboutSection = () => (
    <section id="about" className="about-section">
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
            <img id="chefA" src={chefsA} alt="adrian and mario" aria-label="Mario and Adrian A" />
            <img id="chefB" src={chefsB} alt="adrian and mario" aria-label="Mario and Adrian B" />
        </div>
    </section>
);

export default function Main() {
    return (
        <main className="main-section">
            <div id="menu" className="section-title">
                <h2>Specials</h2>
                <NavLink to="/future" className="yellow-button" aria-label="Online Menu">Online Menu</NavLink>
            </div>
            <SpecialSection />
            <ReviewSection />
            <AboutSection />
        </main>
    );
};
