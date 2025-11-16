import React from 'react'
import clothing2 from '../../../assets/clothing2.avif'
import clothing3 from '../../../assets/clothing3.jpg'
import clothing4 from '../../../assets/clothing4.jpeg'

export default function Clothing() {
  return (
    <div className="category">
      <h3>Clothing</h3>
      <div className="product-grid">
        <img src={clothing2} alt="Dress" />
        <img src={clothing3} alt="Coat" />
        <img src={clothing4} alt="Outfit" />
      </div>
    </div>
  )
}
