import "./Menu.css";

export default function Menu() {
  return (
    <section className="menu">
      <div className="menu-inner">

        {/* ===== PIZZA ===== */}
        <div className="menu-card">
          <h2>PIZZA</h2>
          <p className="menu-note">Tax not included</p>
          <table className="menu-table">
            <thead>
              <tr>
                <th></th>
                <th>Small</th>
                <th>Med</th>
                <th>Large</th>
                <th>Jumbo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Cheese</td><td>$10.40</td><td>$14.25</td><td>$19.35</td><td>$24.40</td></tr>
              <tr><td>Sausage</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Green Pepper</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Onion</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Pepperoni</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Mushroom</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Olive</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Fresh Garlic</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Spinach</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Anchovies</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Giardiniera / Jalapeno</td><td>$11.50</td><td>$15.30</td><td>$20.10</td><td>$26.25</td></tr>
              <tr><td>Bacon</td><td>$12.40</td><td>$16.20</td><td>$20.90</td><td>$27.70</td></tr>
              <tr><td>Tomato</td><td>$12.40</td><td>$16.20</td><td>$20.90</td><td>$27.70</td></tr>
              <tr><td>Beef</td><td>$12.40</td><td>$16.20</td><td>$20.90</td><td>$27.70</td></tr>
              <tr><td>Sausage & Mushroom</td><td>$12.40</td><td>$16.20</td><td>$20.90</td><td>$27.70</td></tr>
              <tr><td>Special</td><td>$14.05</td><td>$17.70</td><td>$22.75</td><td>$29.45</td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="menu-right">

          {/* ===== SANDWICHES ===== */}
          <div className="menu-card">
            <h2>SANDWICHES</h2>
            <ul>
              <li>Beef Sandwich $8.10</li>
              <li>Sausage Sandwich $8.10</li>
              <li>Meatball Sandwich $8.10</li>
              <li>French Fries $2.70</li>
            </ul>
          </div>

          {/* ===== DINNERS ===== */}
          <div className="menu-card">
            <h2>DINNERS</h2>
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
