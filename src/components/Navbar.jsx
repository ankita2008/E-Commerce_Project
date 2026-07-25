import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.length);
  }, []);

  return (
    <nav className="navbar">
      <h2>My Shop</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/cart">
          Cart ({count})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;