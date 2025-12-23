import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // DEMO credentials
  const DEMO_USERNAME = "foodie";
  const DEMO_PASSWORD = "1234";

  const login = async () => {
    if (!username.trim() || !password.trim()) {
      alert("Please enter username and password");
      return;
    }

    // Frontend validation
    if (username !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
      alert("Wrong username or password");
      return;
    }

    try {
      // Backend still receives only username (unchanged)
      const res = await api.post("/users/login", { username });

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/restaurants");
    } catch (err) {
      alert("Login failed. Backend not responding.");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1>🍔 Foodie</h1>
        <p>Discover the best food & drinks near you</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Continue</button>

        <span className="login-footer">
          Demo Login → <b>foodie / 1234</b>
        </span>
      </div>
    </div>
  );
}

export default Login;
