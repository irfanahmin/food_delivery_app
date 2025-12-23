import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import MenuItem from "../components/MenuItem";
import Header from "../components/Header";
import "./Menu.css";

function Menu() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch menu
  useEffect(() => {
    api
      .get(`/restaurants/${id}/menu`)
      .then((res) => {
        setMenu(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
        setLoading(false);
      });
  }, [id]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // 👉 ONLY navigate to payment
  const placeOrder = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      navigate("/");
      return;
    }

    navigate("/payment", {
      state: {
        cart,
        restaurantId: id,
        totalPrice
      }
    });
  };

  if (loading) {
    return <div className="loader">Loading delicious menu...</div>;
  }

  return (
    <>
      <Header />

      <div className="menu-container">
        <div className="menu-header">
          <h2 className="page-title">Menu</h2>
          <p className="menu-count">{menu.length} ITEMS AVAILABLE</p>
        </div>

        <div className="menu-list">
          {menu.map((item) => (
            <MenuItem
              key={item._id}
              item={item}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fixed-cart-bar" onClick={placeOrder}>
            <div className="cart-text">
              <span className="cart-qty">{cart.length} ITEMS</span>
              <span className="cart-divider">|</span>
              <span className="cart-price">₹{totalPrice}</span>
            </div>
            <div className="cart-action">
              CONTINUE TO PAY →
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;
