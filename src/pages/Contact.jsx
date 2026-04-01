import { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Frontend only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have a question or want to place an order? Reach out to us!
      </p>

      <div className="contact-container">

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info + Map */}
        <div className="contact-info">
          <h3>Swaraj Gulpatti</h3>
          <p>📍 Baramati, Maharashtra, India</p>
          <p>📞 +91 9860928696</p>
          <p>📧 swarajgulpatti@gmail.com</p>

          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.2064770569933!2d74.46248347652387!3d18.136303032338027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a700021f1023%3A0xfbd487ae528ca7a5!2sSwaraj%20Gulpatti%20Pandare!5e1!3m2!1sen!2sin!4v1767105853417!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>
  );
};

export default Contact;
