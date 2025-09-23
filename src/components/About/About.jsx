import React from "react";
import "./About.css"; // keep styles separate for this component

export default function About() {
  return (
    <section className="about">
      <header className="about-header">
        <h1 id="pizzeria-name">
          <span className="phils">PHIL'S</span> PIZZA
        </h1>
        <h5 id="since-text">Since 1960</h5>
      </header>

      <div className="about-photos">
        {/* Replace the src values with your actual image paths */}
        <img src="/images/photo1.jpg" alt="Phil's Pizza interior" />
        <img src="/images/photo2.jpg" alt="Delicious pizza slice" />
        <img src="/images/photo3.jpg" alt="Customers enjoying pizza" />
      </div>

      <div className="about-testimonial">
        <p>
          “Best pizza in town! Crispy crust, perfectly seasoned sauce, and that
          classic neighborhood vibe that keeps us coming back for decades.”
        </p>
      </div>
    </section>
  );
}
