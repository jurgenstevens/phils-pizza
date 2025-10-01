import "./Info.css";

export default function Info() {
  return (
    <section id="info" className="info">
      <div className="info-inner">

        {/* ===== LEFT COLUMN: HOURS ===== */}
        <div className="info-left">
          <h2 className="info-font">Hours</h2>
          <h3>Open 7 days a week!</h3>
          <h3>Sunday - 4:00 PM to 11:00 PM</h3>
          <h3>Monday thru Thursday - 4:00 PM to 11:00 PM</h3>
          <h3>Friday & Saturday - 4:00 PM to midnight</h3>
          <br />
          <h3>Prices subject to change without notice</h3>
          <h3>Tax & delivery not included</h3>
        </div>

        {/* ===== RIGHT COLUMN: CONTACT + ADDRESS ===== */}
        <div className="info-right">
          {/* Contact */}
          <div className="info-card">
            <h2 className="info-font">Contact</h2>
            <h3>(773) 523-0947 or (773) 548-3203</h3>
          </div>

          {/* Address */}
          <div className="info-card">
            <h2 className="info-font">Address</h2>
            <h3>1102 W 35th St.</h3>
            <h3>Chicago, IL 60609</h3>
          </div>
          <br />
          <p>Developed by <a href="https://www.jurgenstevens.dev/">Jurgen Stevens</a></p>
        </div>

      </div>
    </section>
  );
}
