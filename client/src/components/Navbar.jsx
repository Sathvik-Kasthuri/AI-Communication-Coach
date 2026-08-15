import React, { useState } from "react";
import logo from "../assets/images/AI Logo.png";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
      </button>

      <ul className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/features">Features</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="auth-buttons">
        <Link to="/signup" className="navbar-btn">
          SignUp
        </Link>
        <Link to="/signin" className="navbar-btn">
          SignIn
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
