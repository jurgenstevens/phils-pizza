import "./Main.css"; // keep styles separate for this component

export default function Main() {
  return (
    <section id="main" className="main">
      <header className="main-header">
        <h1 id="pizzeria-name">
          <span className="phils">PHIL'S</span> PIZZA
        </h1>
        <h5 id="since-text">Since 1960</h5>
      </header>

      <div className="main-photos">
        <div className="photo-wrapper">
          <img
            className="photo-top"
            src="/phils_sandynoto_chicago.avif"
            alt="Phil's Pizza"
          />
          <img
            className="photo-side left"
            src="/phils-intersection.jpeg"
            alt="Street intersection"
          />
          <img
            className="photo-side right"
            src="/phils-pizza-crowd.png"
            alt="Customers waiting for their pizza"
          />
        </div>
      </div>

      <div className="main-testimonial">
        <p>
          “Best pizza in town! Crispy crust, perfectly seasoned sauce, and that
          classic neighborhood vibe that keeps us coming back for decades.”
        </p>
      </div>
    </section>
  );
}
