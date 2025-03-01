import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="overview">
          <h4>About Arte Suave Jiu Jitsu</h4>
          <p>
            Founded in 2024, Arte Suave is a Brazilian Jiu Jitsu (BJJ) school
            taught under the tutelage of Head Coach Kieran 'Roy' Coxon
            (@royjiujitsu) and Coach John Harrison (@147jdh).
          </p>
        </div>
      </div>

      <div className="addresses">
        <h4>Address</h4>
        <p>Chapel Allerton Primary School, Main Hall, LS7 3PD</p>
      </div>

      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="follow-us">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/artesuaveleeds/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61563344016748">
              Facebook
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <p>&copy; 2025 Elida Gibbs Football Club All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
