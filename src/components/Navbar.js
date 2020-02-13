import React from "react";

function Navbar() {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Portfolio</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Projects</a></li>
        <li><a href="badges.html">Contact</a></li>
        <li><a href="collapsible.html">Resume</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
