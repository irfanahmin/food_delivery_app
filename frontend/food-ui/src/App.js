import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Restaurants from "./pages/Restaurants";
import Menu from "./pages/Menu";
import OrderPlaced from "./pages/OrderPlaced";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
