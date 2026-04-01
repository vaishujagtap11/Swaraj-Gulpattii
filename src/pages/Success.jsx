import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>✅ Order Placed Successfully!</h1>
      <p>Thank you for your order. You will receive your items soon.</p>
      <Link
        to="/home"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#6b3e26",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Success;
