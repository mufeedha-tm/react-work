import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar({ dark, setDark, cartCount }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo-wrap">
          <img src={logo} alt="LunaGlow Beauty" className="logo-img" />
          <div className="logo-text">LunaGlow</div>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#hero" onClick={() => setOpen(false)}>Home</a>
          <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
          <a href="#deals" onClick={() => setOpen(false)}>Deals</a>
          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
        </nav>
      </div>

      <div className="nav-right">
        <button className="icon-btn" title="Search">🔍</button>

        <label className="toggle" title="Toggle dark mode">
          <input
            type="checkbox"
            onChange={() => setDark(prev => !prev)}
            checked={dark}
          />
          <span className="slider" />
        </label>

        <div className="cart-pill">
          🛒 <span className="cart-count">{cartCount}</span>
        </div>

        <button className="primary-btn">Sign In</button>

        <button
          className="hamburger"
          onClick={() => setOpen(v => !v)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>
    </header>
  );
}
