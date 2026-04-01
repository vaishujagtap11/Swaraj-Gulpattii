import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3>Swaraj Gulpatti</h3>
          <p>
            We provide pure, homemade jaggery products made using
            traditional methods with no chemicals.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📞 +91 9860928696</p>
          <p>📞 +91 9860928689</p>
          <p>📧 swarajgulpatti@gmail.com</p>

          {/* <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
          </div> */}
        </div>

      </div>

      {/* Google Map */}
      <div className="footer-map">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.2064770569933!2d74.46248347652387!3d18.136303032338027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a700021f1023%3A0xfbd487ae528ca7a5!2sSwaraj%20Gulpatti%20Pandare!5e1!3m2!1sen!2sin!4v1767105853417!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Swaraj Gulpatti. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
