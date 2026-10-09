
import "./Footer.css";
import { Link } from "react-router-dom";

export function Footer() {

  return (

    <footer className="footer">

      {/* =========================
          UPPER FOOTER
      ========================== */}

      <div className="upper-footer">


        {/* =========================
            BRAND
        ========================== */}

        <div className="footer-brand">

          <div className="Logo">

            <img
              src="/Logo/logo.jpg"
              alt="NE BakeShop Logo"
            />

            <p>
              NE BakeShop
            </p>

          </div>


          <p className="footer-tagline">
            Freshly baked, made with care.
          </p>


          <p className="footer-description">
            Delicious breads, pastries, and cakes
            made fresh for every occasion.
          </p>

        </div>


        {/* =========================
            QUICK LINKS
        ========================== */}

        <div className="footer-column">

          <h3>
            Explore
          </h3>


          <div className="footer-links">

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

            <Link to="/menu">
              Order Online
            </Link>

          </div>

        </div>


        {/* =========================
            CUSTOMER CARE
        ========================== */}

        <div className="footer-column">

          <h3>
            Customer Care
          </h3>


          <div className="footer-links">

            <a href="#">
              Contact Us
            </a>

            <a href="#">
              FAQs
            </a>

            <a href="#">
              Delivery
            </a>

            <a href="#">
              Bulk Orders
            </a>

            <a href="#">
              Feedback
            </a>

          </div>

        </div>


        {/* =========================
            SOCIAL LINKS
        ========================== */}

        <div className="social-links">

          <h3>
            Connect With Us
          </h3>


          <p className="social-text">
            Follow us for fresh updates and promos.
          </p>


          <div className="social-buttons">


            {/* Facebook */}

            <a
              href="https://www.facebook.com/nebakeshopandrestaurant"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >

              <span>
                f
              </span>

            </a>


            {/* Instagram */}

            <a
              href="https://www.instagram.com/nebakeshopandrestaurant"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >

              <span>
                ◎
              </span>

            </a>


            {/* Google */}

            <a
              href="#"
              aria-label="Google"
            >

              <span>
                G
              </span>

            </a>


            {/* TikTok */}

            <a
              href="#"
              aria-label="TikTok"
            >

              <span>
                ♪
              </span>

            </a>


          </div>

        </div>

      </div>


      {/* =========================
          CONTACT STRIP
      ========================== */}

      <div className="contact-strip">


        {/* Visit Us */}

        <div>

          <span className="contact-label">
            Visit Us
          </span>

          <p>
            Cabanatuan City, Nueva Ecija
          </p>

        </div>


        {/* Call Us */}

        <div>

          <span className="contact-label">
            Call Us
          </span>

          <p>
            0912 345 6789
          </p>

        </div>


        {/* Email */}

        <div>

          <span className="contact-label">
            Email
          </span>

          <p>
            nemarketing.cfvi@gmail.com
          </p>

        </div>


       


      </div>


      {/* =========================
          LOWER FOOTER
      ========================== */}

      <div className="lower-footer">


        <p>
          © 2026 NE BakeShop. All rights reserved.
        </p>


        <div className="termAndConditions">

          <a href="#">
            Terms & Conditions
          </a>

          <a href="#">
            Privacy Notice
          </a>

        </div>


      </div>


    </footer>

  );

}

