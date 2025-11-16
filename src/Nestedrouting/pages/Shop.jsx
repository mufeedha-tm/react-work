import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Shop() {
  return (
    <section className="shop">
      <h2>Shop by Category</h2>
      <nav className="shop-links" style={{ marginBottom: '20px' }}>
        <NavLink to="clothing">Clothing</NavLink>
        <NavLink to="accessories">Accessories</NavLink>
        <NavLink to="home-decor">Home Decor</NavLink>
      </nav>
      <Outlet />
    </section>
  )
}
