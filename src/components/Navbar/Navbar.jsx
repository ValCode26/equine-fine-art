import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import React from "react"; // For JSX transformation
import { useState, useEffect } from "react"; // For hooks

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <Logo />
          </Link>

          <div className="navbar__desktop-links">
            <Link to="/" className="navbar__link">
              Home
            </Link>
            <Link to="/gallery" className="navbar__link">
              Gallery
            </Link>
            <Link to="/about" className="navbar__link">
              About
            </Link>
            <Link to="/shop" className="navbar__link">
              Shop
            </Link>
            <Link to="/contact" className="navbar__contact-button">
              Contact
            </Link>
          </div>

          <div className="navbar__mobile-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar__toggle"
            >
              {isOpen ? (
                <FaTimes className="navbar__toggle-icon" />
              ) : (
                <FaBars className="navbar__toggle-icon" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`navbar__mobile-links ${
          isOpen ? "navbar__mobile-links--open" : ""
        }`}
      >
        <div className="navbar__mobile-links-inner">
          <Link
            to="/"
            className="navbar__mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="navbar__mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="navbar__mobile-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/shop"
            className="navbar__mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="navbar__mobile-contact-button"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
