import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/navbar.css";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Jewellery Shop</div>

    
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/listing">Listing</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      {/* Right side */}
      <div className="nav-right">
        <NavLink to="/cart" className="cart">
          <FiShoppingCart size={24} color="gold" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
