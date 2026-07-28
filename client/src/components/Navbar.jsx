import React from "react";
import logo from "../assets/images/AI Logo.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="navbar-btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
