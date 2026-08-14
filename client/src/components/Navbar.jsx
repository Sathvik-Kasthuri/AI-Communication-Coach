import React, { useState } from "react";
import logo from "../assets/images/AI Logo.png";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
        <li onClick={() => setMenuOpen(false)}>Home</li>
        <li onClick={() => setMenuOpen(false)}>Features</li>
        <li onClick={() => setMenuOpen(false)}>About</li>
        <li onClick={() => setMenuOpen(false)}>Contact</li>
      </ul>

      <button className="navbar-btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
