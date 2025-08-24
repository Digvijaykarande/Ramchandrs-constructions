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

      {/* Mobile Toggle Button */}
      <button 
        className="navbar__toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/products" onClick={() => setIsOpen(false)}>Products</a></li>
          <li><a href="/categories" onClick={() => setIsOpen(false)}>Categories</a></li>
          <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
          <li>
            <a href="/cart" className="navbar__cart" onClick={() => setIsOpen(false)}>
              <ShoppingCart size={18} /> Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
