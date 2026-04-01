import "../styles/about.css";
import founder from "../assets/founder.jpeg"; 
import cofounder from "../assets/cofounder.jpg"; 
import mem1 from "../assets/mem1.avif"; 
import mem2 from "../assets/mem2.jpg"; 
import mem3 from "../assets/mem3.jpg"; 
import mem4 from "../assets/mem4.avif"; 
import mem5 from "../assets/mem5.jpg"; 


const About = () => {
  return (
    <div className="about-page">

      {/* ===== Hero Intro ===== */}
      <section className="about-hero">
        <h1>About Swaraj Gulpatti</h1>
        <p>
          Swaraj Gulpatti is a family-owned business producing pure,
          homemade jaggery products using traditional methods.
          Our mission is to provide healthy, chemical-free alternatives
          while preserving authentic taste.
        </p>
      </section>

      {/* ===== Brand Story / Journey ===== */}
      <section className="about-story">
        <h2>Our Journey</h2>
        <p className="story-text">
          What started as a small traditional jaggery-making initiative has
          grown into a trusted brand delivering chemical-free, healthy
          alternatives to refined sugar across Maharashtra and nearby regions.
        </p>
      </section>

      {/* ===== Mission Vision Values ===== */}
      <section className="about-mvv">
        <h2>Mission • Vision • Values</h2>
        <div className="mvv-grid">
          <div className="mvv-card">
            <h3>Mission</h3>
            <p>Provide healthy, natural jaggery products without compromise.</p>
          </div>
          <div className="mvv-card">
            <h3>Vision</h3>
            <p>To become a trusted household name for organic sweetness.</p>
          </div>
          <div className="mvv-card">
            <h3>Values</h3>
            <p>Quality, purity, honesty, and customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* ===== Founders ===== */}
      <section className="about-ceo">
        <h2>Our Founders</h2>

        {/* Wrapper to keep founders side by side */}
        <div className="founder-wrapper">
          <div className="ceo-card">
            <img src={founder} alt="Founder" />
            <div>
              <h3>Prashant Nimbalkar</h3>
              <p>
                <strong>Founder & CEO</strong><br />
                Oversees production quality, sourcing, and long-term vision.
              </p>
            </div>
          </div>

          <div className="ceo-card">
            <img src={cofounder} alt="Co-Founder" />
            <div>
              <h3>Priyanka Nimbalkar</h3>
              <p>
                <strong>Co-Founder & COO</strong><br />
                Manages operations, logistics, and day-to-day business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={mem1} alt="Team" />
            <h3>Ramesh Patil</h3>
            <p>Production Specialist</p>
          </div>
          <div className="team-card">
            <img src={mem2} alt="Team" />
            <h3>Rajesh Deshmukh</h3>
            <p>Quality Control</p>
          </div>
          <div className="team-card">
            <img src={mem3} alt="Team" />
            <h3>Anil More</h3>
            <p>Packaging & Logistics</p>
          </div>
          <div className="team-card">
            <img src={mem4} alt="Team" />
            <h3>Sanket Kulkarni</h3>
            <p>Sales & Marketing</p>
          </div>
          <div className="team-card">
            <img src={mem5} alt="Team" />
            <h3>Vaishnavi Jagtap</h3>
            <p>Customer Support & Admin</p>
          </div>
        </div>
      </section>

      {/* ===== Our Impact ===== */}
      <section className="about-impact">
        <h2>Our Impact</h2>
        <div className="impact-cards">
          <div className="impact-item">
            <h3>500+</h3>
            <p>Retail partners across Maharashtra and nearby regions</p>
          </div>
          <div className="impact-item">
            <h3>50,000+</h3>
            <p>Happy customers choosing healthy jaggery alternatives</p>
          </div>
          <div className="impact-item">
            <h3>10+ Years</h3>
            <p>Preserving traditional jaggery-making techniques</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
