import React, { useState } from "react";
import "../../styles/Navbar.css";
import { Menu, X, ShoppingCart } from "lucide-react"; // modern icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/"><div className="navbar__logo">Ramchandra Constructions</div></a>

      {/* Desktop Links */}
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/about">About</a></li>
        <li>
          <a href="/cart" className="navbar__cart">
            <ShoppingCart size={18} /> Cart
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
