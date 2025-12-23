import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./OrderPlaced.css";

function OrderPlaced() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="order-placed-wrapper">
        <div className="order-card">
          
          {/* Animated Success Icon */}
          <div className="success-icon bounce">
            ✅
          </div>

          <h1 className="order-title">Order Confirmed!</h1>

          <p className="order-subtitle">
            Your food is being freshly prepared 🍳
          </p>

          {/* Status */}
          <div className="order-status">
            <span>Status</span>
            <span className="status-pill pulse">PLACED</span>
          </div>

          {/* Fake Tracking Animation */}
          <div className="tracking-box">
            <div className="rider">🚴</div>
            <div className="track-line">
              <div className="track-progress"></div>
            </div>
            <p className="tracking-text">delivery is on the way! </p>
          </div>

          {/* Actions */}
          <div className="order-actions">
            <button className="primary-btn">
              Tracking Started 🚀
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/restaurants")}
            >
              Order More Food 🍔
            </button>
          </div>

          <p className="order-footer">
            Estimated delivery: <b>25–35 mins</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default OrderPlaced;
