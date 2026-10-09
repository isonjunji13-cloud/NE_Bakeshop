import "./ProductDetails.css";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Products } from "/src/data/Products.jsx";

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const product = Products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>

        <Link to="/menu" className="back-to-menu">
          ← Back to Menu
        </Link>
      </div>
    );
  }

  /* =========================================
     QUANTITY
  ========================================= */

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) =>
      currentQuantity > 1
        ? currentQuantity - 1
        : currentQuantity
    );
  };


  /* =========================================
     ADD TO CART
  ========================================= */

  const handleAddToCart = () => {
    // Get current cart
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists
    const existingItem = savedCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingItem) {
      // Product already in cart
      updatedCart = savedCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );
    } else {
      // New product
      updatedCart = [
        ...savedCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
        },
      ];
    }

    // Save cart
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // Go to Cart
    navigate("/cart");
  };


  /* =========================================
     BUY NOW
  ========================================= */

  const handleBuyNow = () => {
    const buyNowItem = [
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      },
    ];

    localStorage.setItem(
      "cart",
      JSON.stringify(buyNowItem)
    );

    navigate("/checkout");
  };


  return (
    <div className="product-details">

      {/* PRODUCT IMAGE */}

      <div className="product-image-wrapper">

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

      </div>


      {/* PRODUCT INFORMATION */}

      <div className="product-info">

        <Link
          to="/menu"
          className="back-to-menu"
        >
          ← Back to Menu
        </Link>

        <br />


        <h1>
          {product.name}
        </h1>


        <h2>
          ₱{product.price}
        </h2>


        <p className="product-description">
          {product.description}
        </p>


        {/* FEATURES */}

        <div className="product-features">

          <div className="product-feature">
            <div className="product-feature-icon">
              🍰
            </div>

            <span>
              Freshly Baked
            </span>
          </div>


          <div className="product-feature">
            <div className="product-feature-icon">
              ❤️
            </div>

            <span>
              Made With Love
            </span>
          </div>


          <div className="product-feature">
            <div className="product-feature-icon">
              🧁
            </div>

            <span>
              Quality Ingredients
            </span>
          </div>


          <div className="product-feature">
            <div className="product-feature-icon">
              ✨
            </div>

            <span>
              Perfect for Any Occasion
            </span>
          </div>

        </div>


        {/* PURCHASE */}

        <div className="product-purchase">

          <label className="quantity-label">
            Quantity
          </label>


          <div className="quantity-control">

            <button
              type="button"
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
            >
              −
            </button>


            <span>
              {quantity}
            </span>


            <button
              type="button"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
            >
              +
            </button>

          </div>


          {/* ACTION BUTTONS */}

          <div className="product-actions">

            <button
              type="button"
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>


            <button
              type="button"
              className="buy-now-btn"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

          </div>


          {/* DELIVERY */}

          <div className="product-delivery">

            <div className="delivery-item">
              🚚

              <span>
                <strong>Delivery:</strong>{" "}
                Available for selected areas
              </span>
            </div>


            <div className="delivery-item">
              📦

              <span>
                <strong>Packaging:</strong>{" "}
                Carefully packed for freshness
              </span>
            </div>


            <div className="delivery-item">
              🕐

              <span>
                <strong>Preparation:</strong>{" "}
                Freshly prepared for every order
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}