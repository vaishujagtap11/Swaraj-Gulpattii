import { Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

import "../styles/navbar.css";
import cartIcon from "../assets/cart.png";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useAuth();

  const [hover, setHover] = useState(false);
  const timerRef = useRef(null);

  // Hover handlers with delay
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setHover(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setHover(false);
    }, 2000); // 2 sec delay
  };

  const firstLetter = user?.name?.charAt(0).toUpperCase();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo-img" />
          Swaraj Gulpatti
        </Link>
      </div>

      {/* Links */}
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Actions */}
      <div className="navbar-actions">
        <Link to="/cart" className="cart-icon">
          <img src={cartIcon} alt="Cart" className="cart-img" />
          <span className="cart-badge">{cart.length}</span>
        </Link>

        {/* Avatar/Login */}
        {user ? (
          <div
            className="avatar-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="avatar-circle">{firstLetter}</div>

            {hover && (
              <div
                className="avatar-dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p><strong>{user.name}</strong></p>
                <p>{user.email}</p>
                <p>{user.mobile}</p>

                <button onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
