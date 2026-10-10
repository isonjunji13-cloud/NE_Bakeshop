
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const updateCartQuantity = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const totalQuantity = cart.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
      );

      setCartQuantity(totalQuantity);
    } catch {
      setCartQuantity(0);
    }
  };

  useEffect(() => {
    updateCartQuantity();

    window.addEventListener("cartUpdated", updateCartQuantity);
    window.addEventListener("storage", updateCartQuantity);

    return () => {
      window.removeEventListener("cartUpdated", updateCartQuantity);
      window.removeEventListener("storage", updateCartQuantity);
    };
  }, []);

  // Close the mobile menu after navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="Logo" onClick={closeMenu}>
        <img src="/Logo/logo.jpg" alt="NE BakeShop Logo" />
        <p>NE BakeShop</p>
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
      >
        <i
          className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
          aria-hidden="true"
        />
      </button>

      {/* Navigation Links */}
      <div
        id="navbar-links"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/menu" onClick={closeMenu}>Menu</Link>
        <Link to="/promos" onClick={closeMenu}>Promos</Link>
        <Link to="/locations" onClick={closeMenu}>Locations</Link>

        {/* Shopping Cart */}
        <Link
          to="/cart"
          className="cart-link"
          title="Shopping Cart"
          aria-label={`Shopping Cart, ${cartQuantity} items`}
          onClick={closeMenu}
        >
          <span className="cart-icon">
            <i className="fa-solid fa-cart-shopping" aria-hidden="true" />

            {cartQuantity > 0 && (
              <span className="cart-badge">{cartQuantity}</span>
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
          onClick={closeMenu}
        >
          <i className="fa-solid fa-user-tie" aria-hidden="true" />
          <span className="mobile-login-text">Employee Sign In</span>
        </Link>
      </div>
    </nav>
  );
}
