import "../styles/services.css";

const Services = () => {
  return (
    <div className="services-page">

      <h1>Our Services</h1>
      <p className="services-intro">
        Swaraj Gulpatti provides high-quality jaggery products and services
        for both individual customers and businesses.
      </p>

      <div className="services-grid">

        <div className="service-card">
          <h3>Retail Sales</h3>
          <p>
            Fresh jaggery chikki, cubes, and powder available for
            individual customers.
          </p>
        </div>

        <div className="service-card">
          <h3>Wholesale Supply</h3>
          <p>
            Bulk supply for shops, hotels, and distributors at
            competitive prices.
          </p>
        </div>

        <div className="service-card">
          <h3>Bulk Orders</h3>
          <p>
            Special bulk orders for festivals, events, and functions.
          </p>
        </div>

        <div className="service-card">
          <h3>Custom Packaging</h3>
          <p>
            Customized packaging options for gifting and branding.
          </p>
        </div>

        <div className="service-card">
          <h3>Corporate Gifting</h3>
          <p>
            Premium jaggery gift packs for employees, clients, and events.
          </p>
        </div>

        <div className="service-card">
          <h3>Subscription Plans</h3>
          <p>
            Monthly delivery of jaggery products straight to your doorstep.
          </p>
        </div>

        <div className="service-card">
          <h3>Workshops & Demos</h3>
          <p>
            Learn to make traditional jaggery sweets and chikkis in our workshops.
          </p>
        </div>

        <div className="service-card">
          <h3>Delivery & Logistics</h3>
          <p>
            Fast and safe delivery across India with real-time tracking.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Services;
