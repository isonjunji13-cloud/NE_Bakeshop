import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

export function Cart() {
  const navigate = useNavigate();

  /* =========================================
     CART STATE
  ========================================= */

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });


  /* =========================================
     SAVE CART + UPDATE NAVBAR
  ========================================= */

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

    // Tell Navbar that the cart has changed
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }, [cartItems]);


  /* =========================================
     INCREASE QUANTITY
  ========================================= */

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Number(item.quantity) + 1,
            }
          : item
      )
    );
  };


  /* =========================================
     DECREASE QUANTITY
  ========================================= */

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && Number(item.quantity) > 1
          ? {
              ...item,
              quantity: Number(item.quantity) - 1,
            }
          : item
      )
    );
  };


  /* =========================================
     REMOVE ITEM
  ========================================= */

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };


  /* =========================================
     CLEAR CART
  ========================================= */

  const clearCart = () => {
    setCartItems([]);
  };


  /* =========================================
     CALCULATE SUBTOTAL
  ========================================= */

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        Number(item.quantity || 0),
    0
  );


  /* =========================================
     CHECKOUT
  ========================================= */

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    navigate("/checkout");
  };


  return (
    <main className="cart">

      {/* =====================================
          CART HEADER
      ===================================== */}

      <header className="cart-header">

        <p>Your Shopping Cart</p>

        <h1>Shopping Cart</h1>

        <span>
          Review the items you've selected before
          checkout.
        </span>

      </header>


      {/* =====================================
          CART CONTAINER
      ===================================== */}

      <div className="cart-container">


        {/* ===================================
            CART ITEMS
        =================================== */}

        <section className="cart-items">

          <div className="cart-items-header">

            <h2>Your Items</h2>

            {cartItems.length > 0 && (
              <button
                type="button"
                className="clear-cart"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            )}

          </div>


          {/* =================================
              EMPTY CART
          ================================= */}

          {cartItems.length === 0 ? (

            <div className="empty-cart">

              <div className="empty-cart-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>

              <h3>
                Your cart is empty
              </h3>

              <p>
                You haven't added any products yet.
              </p>

              <Link
                to="/menu"
                className="continue-shopping"
              >
                Browse Our Menu
              </Link>

            </div>

          ) : (

            /* =================================
               CART ITEMS
            ================================= */

            <div className="cart-list">

              {cartItems.map((item) => (

                <article
                  className="cart-item"
                  key={item.id}
                >

                  {/* Product Image */}

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  {/* Product Information */}

                  <div className="cart-item-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₱
                      {Number(item.price).toFixed(2)}
                    </p>


                    {/* Quantity */}

                    <div className="quantity-control">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Item Total */}

                  <div className="item-total">

                    ₱
                    {(
                      Number(item.price) *
                      Number(item.quantity)
                    ).toFixed(2)}

                  </div>


                  {/* Remove */}

                  <button
                    type="button"
                    className="remove-item"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>

                </article>

              ))}

            </div>

          )}

        </section>


        {/* ===================================
            CART SUMMARY
        =================================== */}

        <aside className="cart-summary">

          <h2>
            Cart Summary
          </h2>


          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₱{subtotal.toFixed(2)}
            </span>

          </div>


          <div className="summary-divider"></div>


          <div className="summary-total">

            <span>
              Total
            </span>

            <span>
              ₱{subtotal.toFixed(2)}
            </span>

          </div>


          {/* Checkout */}

          <button
            type="button"
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>


          {/* Continue Shopping */}

          <Link
            to="/menu"
            className="continue-shopping-summary"
          >
            Continue Shopping
          </Link>

        </aside>

      </div>

    </main>
  );
}