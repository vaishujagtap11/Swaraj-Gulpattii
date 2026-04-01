import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Total calculation using 'price' from CartContext
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.cartId}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  {/* Use 'unit' instead of 'selectedUnit' */}
                  <p className="cart-unit">{item.unit}</p>
                  {/* Use 'price' instead of 'finalPrice' */}
                  <h4>₹{item.price}</h4>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.cartId)}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ₹{total}</h2>
            <button onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
