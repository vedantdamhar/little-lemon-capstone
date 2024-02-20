import React from "react";
import restaurant from "./assets/restauranfood.jpg";
import "./header.css";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header id="home" className='banner-section'>
            <section className="intro-section">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>A family-owned Mediterranean restaurant. Serving you traditional foods with a modern twist prepared by our highly-skilled chefs.</p>
                    <NavLink className="yellow-button" id='cta-button' to="/booking">Reserve Now!</NavLink>
                </div>
            </section>
            <section className="landing-image">
                <img src={restaurant} alt="Restaurant" title="Restaurant" onError={(e) => e.target.style.display = 'none'} />
            </section>
        </header>
    );
}

