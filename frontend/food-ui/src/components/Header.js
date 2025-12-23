import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/restaurants")}>
        🍔 Foodie
      </div>
    </div>
  );
}

export default Header;
