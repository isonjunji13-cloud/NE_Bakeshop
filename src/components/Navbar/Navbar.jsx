
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const updateCartQuantity = () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const totalQuantity = cart.reduce(
      (total, item) =>
        total + Number(item.quantity || 0),
      0
    );

    setCartQuantity(totalQuantity);
  };

  useEffect(() => {
    updateCartQuantity();

    window.addEventListener(
      "cartUpdated",
      updateCartQuantity
    );

    window.addEventListener(
      "storage",
      updateCartQuantity
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartQuantity
      );

      window.removeEventListener(
        "storage",
        updateCartQuantity
      );
    };
  }, []);

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="Logo">
        <img
          src="/Logo/logo.jpg"
          alt="NE BakeShop Logo"
        />

        <p>NE BakeShop</p>
      </Link>

      {/* Navigation */}
      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/menu">
          Menu
        </Link>

        <Link to="/promos">
          Promos
        </Link>

        <Link to="/locations">
          Locations
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="cart-link"
          title="Shopping Cart"
          aria-label={`Shopping Cart, ${cartQuantity} items`}
        >
          <span className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>

            {cartQuantity > 0 && (
              <span className="cart-badge">
                {cartQuantity}
              </span>
            )}
          </span>

          <span>Cart</span>
        </Link>

        {/* Employee Sign In */}
        <Link
          to="/employee-login"
          className="employee-login"
          title="Employee Sign In"
          aria-label="Employee Sign In"
        >
          <i className="fa-solid fa-user-tie"></i>
        </Link>

      </div>
    </nav>
  );
}
