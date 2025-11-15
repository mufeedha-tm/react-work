import React from 'react'
import '../home.css'
import heroImg from '../../assets/hero.jpg'
import clothing1 from '../../assets/clothing1.webp'
import accessories1 from '../../assets/accessories1.webp'
import homedecor1 from '../../assets/homedecor1.avif'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <img src={heroImg} alt="Hero Banner" className="hero-img" />
        <h1>Elegant Designs for Modern Living</h1>
        <p>Discover timeless fashion and home essentials crafted with care.</p>
      </div>

      <div className="collections">
        <h2>Featured Collections</h2>
        <div className="grid">
          <img src={clothing1} alt="Clothing" />
          <img src={accessories1} alt="Accessories" />
          <img src={homedecor1} alt="Home Decor" />
        </div>
      </div>
    </section>
  )
}
