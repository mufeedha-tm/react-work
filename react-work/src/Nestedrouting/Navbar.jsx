import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <h2 className="logo">Velvet & Oak</h2>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
