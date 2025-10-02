import "./Menu.css";

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="menu-inner">

        {/* ===== PIZZA ===== */}
<div className="menu-card">
  <h2 className="menu-font">PIZZA</h2>
  <p className="menu-note">Tax not included</p>

  <div className="menu-section">
    <h3>Cheese Pizza</h3>
    <ul className="menu-list">
      <li>Small … $10.40</li>
      <li>Medium … $14.25</li>
      <li>Large … $19.35</li>
      <li>Jumbo … $24.40</li>
    </ul>
  </div>

  <div className="menu-section">
    <h3>Additional Toppings</h3>
    <ul className="menu-list">
      <li>
        Sausage, Green Pepper, Onion, Pepperoni, Mushroom, Olive, Fresh Garlic,
        Spinach, Anchovies, Giardiniera, Jalapeño <br />
        <span className="menu-prices">
          + $1.10 (S) / + $1.05 (M) / + $0.75 (L) / + $1.85 (J)
        </span>
      </li>
      <li>
        Bacon, Tomato, Beef, Sausage & Mushroom <br />
        <span className="menu-prices">
          + $2.00 (S) / + $1.95 (M) / + $1.55 (L) / + $3.30 (J)
        </span>
      </li>
    </ul>
  </div>

  <div className="menu-section">
    <h3>Special Pizza</h3>
    <ul className="menu-list">
      <li>Small … $14.05</li>
      <li>Medium … $17.70</li>
      <li>Large … $22.75</li>
      <li>Jumbo … $29.45</li>
    </ul>
  </div>
</div>


        {/* ===== RIGHT COLUMN ===== */}
        <div className="menu-right">

          {/* ===== SANDWICHES ===== */}
          <div className="menu-card">
            <h2 className="menu-font">SANDWICHES</h2>
            <ul>
              <li>Beef Sandwich $8.10</li>
              <li>Sausage Sandwich $8.10</li>
              <li>Meatball Sandwich $8.10</li>
              <li>French Fries $2.70</li>
            </ul>
          </div>

          {/* ===== DINNERS ===== */}
          <div className="menu-card">
            <h2 className="menu-font">DINNERS</h2>
            <ul>
              <li>Spaghetti Dinner $7.20</li>
              <li>Mostaccioli Dinner $7.20</li>
              <li>Ravioli Dinner $8.10</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
