import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Products } from "/src/data/Products.jsx";

import "./Promos.css";

export function Promos() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPromo, setCurrentPromo] = useState(0);

  // Get all products marked as promo
  const promoProducts = Products.filter(
    (product) => product.promo
  );

  // Filter promo products by category
  const filteredProducts =
    selectedCategory === "all"
      ? promoProducts
      : promoProducts.filter(
          (product) => product.category === selectedCategory
        );

  // Automatically change featured promo
  useEffect(() => {
    if (promoProducts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentPromo(
        (current) => (current + 1) % promoProducts.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [promoProducts.length]);

  // Promo categories
  const categories = [
    { value: "all", label: "All" },
    { value: "cakes", label: "Cakes" },
    { value: "cupcake", label: "Cupcakes" },
    { value: "pastries", label: "Pastries" },
    { value: "meals&dishes", label: "Meals" },
  ];

  return (
    <main className="promos-page">

      {/* ========================================
          PROMOS HEADER
      ======================================== */}

      <section className="promos-header">

        <p className="promos-subtitle">
          Sweet Deals for You
        </p>

        <h1>Promos & Special Offers</h1>

        <p className="promos-description">
          Enjoy delicious treats at special prices.
          Check out our latest promos and
          limited-time offers!
        </p>

      </section>


      {/* ========================================
          FEATURED PROMO
      ======================================== */}

      <section className="featured-promo">

        <div className="featured-promo-content">

          <span className="featured-promo-label">
            SPECIAL OFFER
          </span>

          <h2>
            Sweet Deals,
            <br />
            Made for You
          </h2>

          <p>
            Treat yourself and your loved ones to our
            delicious cakes, pastries, and meals at
            special prices.
          </p>

          <Link
            to="/menu"
            className="featured-promo-button"
          >
            Explore Menu
          </Link>

        </div>


        {/* Featured Promo Slider */}

        <div className="featured-promo-image">

          {promoProducts.length > 0 && (
            <>
              <img
                key={promoProducts[currentPromo].id}
                src={promoProducts[currentPromo].image}
                alt={promoProducts[currentPromo].name}
              />

              <div className="featured-promo-dots">

                {promoProducts.map((product, index) => (
                  <button
                    key={product.id}
                    type="button"
                    className={
                      index === currentPromo
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setCurrentPromo(index)
                    }
                    aria-label={`Show ${product.name}`}
                  />
                ))}

              </div>
            </>
          )}

        </div>

      </section>


      {/* ========================================
          CURRENT PROMOS
      ======================================== */}

      <section className="current-promos">

        <div className="section-heading">

          <p className="section-subtitle">
            DON'T MISS OUT
          </p>

          <h2>Current Promos</h2>

          <p>
            Discover our latest offers and enjoy
            your favorite treats at special prices.
          </p>

        </div>


        {/* ======================================
            PROMO FILTERS
        ====================================== */}

        <div className="promo-filters">

          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={
                selectedCategory === category.value
                  ? "promo-filter active"
                  : "promo-filter"
              }
              onClick={() =>
                setSelectedCategory(category.value)
              }
            >
              {category.label}
            </button>
          ))}

        </div>


        {/* ======================================
            PROMO PRODUCTS
        ====================================== */}

        {filteredProducts.length > 0 ? (

          <div className="promos-list">

            {filteredProducts.map((product) => (

              <article
                className="promo-card"
                key={product.id}
              >

                {/* Product Image */}

                <div className="promo-image-wrapper">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="promo-image"
                  />

                  <span className="promo-badge">
                    PROMO
                  </span>

                </div>


                {/* Product Information */}

                <div className="promo-content">

                  <span className="promo-category">
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.description}
                  </p>


                  {/* Price + Button */}

                  <div className="promo-bottom">

                    <span className="promo-price">
                      ₱{product.price.toFixed(2)}
                    </span>

                    <Link
                      to={`/product/${product.id}`}
                      className="promo-button"
                    >
                      View Product
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="no-promos">

            <h3>
              No promos available
            </h3>

            <p>
              There are currently no promos
              in this category.
            </p>

          </div>

        )}

      </section>


      {/* ========================================
          LIMITED-TIME OFFER
      ======================================== */}

      <section className="limited-offer">

        <div className="limited-offer-content">

          <span className="limited-offer-label">
            LIMITED-TIME OFFER
          </span>

          <h2>
            Grab Your Favorites
            <br />
            Before They're Gone!
          </h2>

          <p>
            Our special offers won't last forever.
            Visit NE BakeShop and enjoy delicious
            treats while the promos are available.
          </p>

          <Link
            to="/menu"
            className="limited-offer-button"
          >
            Explore Our Menu
          </Link>

        </div>

      </section>


      {/* ========================================
          FINAL CTA
      ======================================== */}

      <section className="promos-cta">

        <p className="promos-cta-subtitle">
          SOMETHING SWEET IS WAITING
        </p>

        <h2>
          Make Every Moment
          <br />
          A Little Sweeter
        </h2>

        <p>
          Find your favorite treats and make your
          next celebration extra special.
        </p>

        <div className="promos-cta-buttons">

          <Link
            to="/menu"
            className="cta-menu-button"
          >
            Explore Menu
          </Link>

          <Link
            to="/order"
            className="cta-order-button"
          >
            Order Online
          </Link>

        </div>

      </section>

    </main>
  );
}