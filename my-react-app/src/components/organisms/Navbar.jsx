import React from "react";
import "../../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Ramchandra Constructions</div>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/cart" className="navbar__cart">Cart</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
