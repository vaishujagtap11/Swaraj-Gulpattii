import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";
import qrImg from "../assets/qr.jpeg";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  /* =========================
     STEP CONTROL
  ========================= */
  const [step, setStep] = useState(1);

  /* =========================
     AUTO USER DATA (demo)
  ========================= */
  const user = {
    name: "Vaishnavi Jagtap",
    phone: "9876543210"
  };

  const [name] = useState(user.name);
  const [phone] = useState(user.phone);
  const [address, setAddress] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("COD");
  const [txnId, setTxnId] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  /* =========================
     STEP 1 → NEXT
  ========================= */
  const handleNext = e => {
    e.preventDefault();

    if (!address) {
      alert("Please enter delivery address");
      return;
    }

    setStep(2);
  };

  /* =========================
     PLACE ORDER
  ========================= */
  const handlePayment = e => {
    e.preventDefault();

    if (paymentMethod === "ONLINE" && !txnId) {
      alert("Enter transaction ID");
      return;
    }

    clearCart();
    navigate("/success");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* =========================
            ORDER SUMMARY (UNCHANGED)
        ========================= */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="bill">
            <div className="bill-header">
              <span>Item</span>
              <span>Amount</span>
            </div>

            {cart.map(item => (
              <div
                className="bill-row"
                key={item.cartId}
              >
                <span>
                  {item.name} ({item.unit})
                </span>
                <span>₹{item.price}</span>
              </div>
            ))}

            <div className="bill-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT PANEL — WIZARD
        ========================= */}
        <div className="payment-section">

          {/* STEP 1 — DELIVERY */}
          {step === 1 && (
            <>
              <h2>Delivery Details</h2>

              <form onSubmit={handleNext}>
                <input
                  value={name}
                  readOnly
                  placeholder="Name"
                />

                <input
                  value={phone}
                  readOnly
                  placeholder="Phone"
                />

                <textarea
                  placeholder="Enter Address"
                  value={address}
                  onChange={e =>
                    setAddress(e.target.value)
                  }
                />

                <button type="submit">
                  Next →
                </button>
              </form>
            </>
          )}

          {/* STEP 2 — PAYMENT */}
          {step === 2 && (
            <>
              <h2>Payment</h2>

              <form onSubmit={handlePayment}>
                <label>
                  <input
                    type="radio"
                    checked={
                      paymentMethod === "COD"
                    }
                    onChange={() =>
                      setPaymentMethod("COD")
                    }
                  />
                  Cash On Delivery
                </label>

                <label>
                  <input
                    type="radio"
                    checked={
                      paymentMethod ===
                      "ONLINE"
                    }
                    onChange={() =>
                      setPaymentMethod(
                        "ONLINE"
                      )
                    }
                  />
                  Online Payment
                </label>

                {paymentMethod ===
                  "ONLINE" && (
                  <div className="qr-box">
                    <p>
                      Scan QR & Pay
                    </p>
                    <img
                      src={qrImg}
                      alt="QR"
                    />

                    <input
                      placeholder="Transaction ID"
                      value={txnId}
                      onChange={e =>
                        setTxnId(
                          e.target.value
                        )
                      }
                    />
                  </div>
                )}

                <button type="submit">
                  Place Order
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
