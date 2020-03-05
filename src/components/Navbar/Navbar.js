import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Portfolio</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="collapsible.html">Resume</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
