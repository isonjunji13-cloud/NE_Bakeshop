import "./Menu.css";
import { Link } from "react-router-dom";
import { Products } from "/src/data/Products.jsx";
import { useState } from "react";

export function Menu() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = Products
    .filter((product) => {
      return (
        (
          product.category
            .toLowerCase()
            .includes(search.toLowerCase()) ||

          product.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||

          product.price
            .toString()
            .includes(search)
        ) &&
        (
          category === "All" ||
          product.category === category
        )
      );
    })

    .sort((a, b) => {
      const categorySort =
        a.category.localeCompare(b.category);

      if (categorySort !== 0) {
        return categorySort;
      }

      return a.name.localeCompare(b.name);
    });


  return (
    <main className="menu">

      {/* ========================================
          PAGE HEADER
      ======================================== */}

      <section className="menu-header">

        <p className="menu-subtitle">
          Freshly Baked for You
        </p>

        <h1>
          Our Menu
        </h1>

        <p className="menu-description">
          Discover our delicious selection of cakes,
          pastries, and freshly baked treats made with love.
        </p>

      </section>


      {/* ========================================
          SEARCH
      ======================================== */}

      <section className="menu-search">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

      </section>


      {/* ========================================
          CATEGORIES
      ======================================== */}

      <section className="menu-categories">

        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "cakes" ? "active" : ""}
          onClick={() => setCategory("cakes")}
        >
          Cakes
        </button>

        <button
          className={category === "cupcake" ? "active" : ""}
          onClick={() => setCategory("cupcake")}
        >
          Cupcakes
        </button>

        <button
          className={category === "pastries" ? "active" : ""}
          onClick={() => setCategory("pastries")}
        >
          Pastries
        </button>

        <button
          className={
            category === "meals&dishes"
              ? "active"
              : ""
          }
          onClick={() =>
            setCategory("meals&dishes")
          }
        >
          Meals & Dishes
        </button>

      </section>


      {/* ========================================
          PRODUCTS
      ======================================== */}

      <section className="menu-products">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <article
  className="product-card"
  key={product.id}
>
  <img
    src={product.image}
    alt={product.name}
  />

  {product.promo && (
    <span className="product-promo-label">
      PROMO
    </span>
  )}

  <h4>{product.name}</h4>

  <p>{product.description}</p>

  <strong>
    ₱{product.price.toFixed(2)}
  </strong>

  <Link to={`/product/${product.id}`}>
    View Product
  </Link>
            </article>
          ))

        ) : (

          <p className="no-products">
            No products found.
          </p>

        )}

      </section>

    </main>
  );
}