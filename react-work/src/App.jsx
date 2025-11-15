import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './Nestedrouting/Navbar'
import Home from './Nestedrouting/pages/Home'
import About from './Nestedrouting/pages/About'
import Shop from './Nestedrouting/pages/Shop'
import Clothing from './Nestedrouting/pages/shop/Clothing'
import Accessories from './Nestedrouting/pages/shop/Accessories'
import HomeDecor from './Nestedrouting/pages/shop/HomeDecor'
import Contact from './Nestedrouting/pages/Contact'
import Footer from './Nestedrouting/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />}>
          <Route index element={<Clothing />} /> {/* default */}
          <Route path="clothing" element={<Clothing />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="home-decor" element={<HomeDecor />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  )
}
