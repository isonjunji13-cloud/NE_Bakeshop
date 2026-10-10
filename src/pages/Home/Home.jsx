import "./Home.css";
import { Products } from "/src/data/Products.jsx";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-content">
          <p className="hero-subtitle">
            Freshly Baked Every Day
          </p>

          <h1>
            Freshly Baked, Made With Love
          </h1>

          <p className="hero-description">
            Delicious cakes, pastries, and freshly baked treats
            made for every occasion.
          </p>

          <div className="hero-buttons">
            <Link to="/menu">Explore Menu</Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/Logo/Hero_img.jpg"
            alt="Freshly baked bakery products"
          />
        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}

<section className="featured-products">

  <div className="section-heading">
    <p>Our Favorites</p>

    <h2>Featured Products</h2>

    <span>
      Discover some of our most loved freshly baked treats.
    </span>
  </div>


  <div className="product-slider">

    <button
      className="slider-button prev"
      onClick={() => {
        document
          .querySelector(".product-container")
          .scrollBy({
            left: -300,
            behavior: "smooth",
          });
      }}
    >
      ❮
    </button>


    <div className="product-container">

      {Products
        .filter((product) => product.featured === true)
        .map((product) => (

          <article
            className="product-card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>
              {product.description}
            </p>

            <strong>
              ₱{product.price.toFixed(2)}
            </strong>

            <Link to ={`/product/${product.id}`}>
                View Product
              </Link>

          </article>

        ))}

    </div>


    <button
      className="slider-button next"
      onClick={() => {
        document
          .querySelector(".product-container")
          .scrollBy({
            left: 300,
            behavior: "smooth",
          });
      }}
    >
      ❯
    </button>

  </div>

</section>



      {/* ================= ABOUT PREVIEW ================= */}

      <section className="about-preview">

        <div className="about-image">
          <img
            src="/Logo/teacher.jpg"
            alt="Sweet Crumbs Bakery"
          />
        </div>

        <div className="about-content">

          <p>Our Story</p>

          <h2>Baked With Passion</h2>

          <p>
            Sweet Crumbs Bakery was created with a simple goal:
            to bring freshly baked treats and delicious moments
            to our community.
          </p>

          <p>
            From everyday pastries to special celebration cakes,
            every product is prepared with care.
          </p>

         <Link to="/menu">Learn More</Link>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-choose-us">

        <div className="section-heading">

          <p>Why Sweet Crumbs?</p>

          <h2>Why Choose Us</h2>

          <span>
            We care about every product we serve.
          </span>

        </div>


        <div className="features-container">

          <article className="feature-card">

            <div className="feature-icon">
              🥐
            </div>

            <h3>Fresh Every Day</h3>

            <p>
              Our products are prepared and baked fresh every day.
            </p>

          </article>


          <article className="feature-card">

            <div className="feature-icon">
              ⭐
            </div>

            <h3>Quality Ingredients</h3>

            <p>
              We use carefully selected ingredients for every recipe.
            </p>

          </article>


          <article className="feature-card">

            <div className="feature-icon">
              ❤️
            </div>

            <h3>Made With Love</h3>

            <p>
              Every product is prepared with care and attention.
            </p>

          </article>


          <article className="feature-card">

            <div className="feature-icon">
              🎂
            </div>

            <h3>Perfect for Every Occasion</h3>

            <p>
              Perfect for birthdays, celebrations, and everyday treats.
            </p>

          </article>

        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}

      <section className="call-to-action">

        <div className="cta-content">

          <p>Something Sweet Is Waiting</p>

          <h2>Ready for Something Sweet?</h2>

          <span>
            Explore our freshly baked cakes, pastries, and treats.
          </span>

          <Link to="/menu">Order Now...</Link>

        </div>

      </section>

    </main>
  );
}