import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  // Data coming from Menu page
  const { cart,totalPrice } = location.state || {};

  if (!cart) {
    navigate("/restaurants");
    return null;
  }

  const handlePayment = () => {
    // Fake payment success
    setTimeout(() => {
      navigate("/order-placed");
    }, 800);
  };

  return (
    <>
      <Header />

      <div className="payment-wrapper">
        <div className="payment-card">

          <h2 className="payment-title">Choose Payment Method</h2>

          <div className="amount-box">
            <span>Total Payable</span>
            <h1>₹{totalPrice}</h1>
          </div>

          {/* Payment Options */}
          <div className="payment-options">

            <label className="payment-option">
              <input type="radio" name="payment" defaultChecked />
              <span>UPI (Google Pay / PhonePe)</span>
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />
              <span>Credit / Debit Card</span>
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>

          </div>

          <button className="pay-btn" onClick={handlePayment}>
            Pay ₹{totalPrice}
          </button>

          <p className="secure-text">🔒 100% Secure Payment</p>
        </div>
      </div>
    </>
  );
}

export default Payment;
