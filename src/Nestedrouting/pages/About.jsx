import React from 'react'
import aboutImg from '../../assets/about.webp'

export default function About() {
  return (
    <section className="about">
      <h2>About Velvet & Oak</h2>
      <p>
        Velvet & Oak is a boutique brand inspired by natural beauty and timeless design.
        We believe in sustainable materials, fine craftsmanship, and everyday elegance.
      </p>
      <img
        src={aboutImg}
        alt="About Us"
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginTop: '20px', borderRadius: '10px' }}
      />
    </section>
  )
}
