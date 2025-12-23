import { useEffect, useState } from "react";
import { api } from "../api/api";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/Header";
import "./Restaurants.css";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/restaurants").then(res => setRestaurants(res.data));
  }, []);

  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="restaurants-hero">
        <h1>Hungry? 😋</h1>
        <p>Order from the best restaurants near you</p>

        <input
          type="text"
          placeholder="Search restaurant or cuisine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Restaurant List */}
      <div className="restaurants-container">
        <h2>Popular Restaurants</h2>

        <div className="restaurant-grid">
          {filteredRestaurants.map(r => (
            <RestaurantCard key={r._id} restaurant={r} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Restaurants;
