import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <img
        className="nav--icon"
        src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
        alt="react_logosvg"
      />
      <h3 className="nav--reactfacts">React Facts</h3>

      <h4 className="nav--projecttitle">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
