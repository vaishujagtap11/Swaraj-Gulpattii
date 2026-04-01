import "../styles/home.css";
import { Link } from "react-router-dom";

// Import product images
import peanuts from "../assets/peanuts.jpeg";
import til from "../assets/til.jpeg";
import coconut from "../assets/coconut.jpeg";
import dryfruit from "../assets/dryfruit.jpeg";
import javas from "../assets/javas.jpeg";

const Home = () => {
  // Popular products data
  const popularProducts = [
    {
      name: "Peanuts Chikki",
      description: "Crunchy & healthy",
      image: peanuts,
    },
    {
      name: "Til Chikki",
      description: "Nutritious sesame seed chikki",
      image: til,
    },
    {
      name: "Coconut Chikki",
      description: "Delicious traditional coconut chikki",
      image: coconut,
    },
    {
      name: "Dry Fruit Chikki",
      description: "Premium dry fruits with jaggery",
      image: dryfruit,
    },
    {
      name: "Javas Chikki",
      description: "Nutritious flax seed chikki",
      image: javas,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The peanut chikki is absolutely delicious! Fresh and crunchy.",
      name: "Ramesh K.",
    },
    {
      quote: "I love the jaggery cubes. 100% natural and chemical-free.",
      name: "Priya S.",
    },
    {
      quote: "Dry fruit chikki is my favorite. Premium quality and tasty!",
      name: "Anil M.",
    },
    {
      quote: "Javas chikki is very healthy and perfect for snacks.",
      name: "Sonia P.",
    },
  ];

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Pure Homemade Jaggery Products</h1>
          <p>
            Fresh, chemical-free jaggery chikki, cubes and powder made with
            traditional methods.
          </p>
          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Our Popular Products</h2>
        <div className="product-grid">
          {popularProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Swaraj Gulpatti?</h2>
        <ul>
          <li>✔ 100% Homemade</li>
          <li>✔ No Chemicals</li>
          <li>✔ Traditional Preparation</li>
          <li>✔ Trusted by Customers</li>
        </ul>
      </section>

      {/* Testimonial Slider */}
      <section className="testimonial-slider">
        <h2>What Our Customers Say</h2>
        <div className="slider-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p>"{testimonial.quote}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
