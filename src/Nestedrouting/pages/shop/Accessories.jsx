import React from 'react'
import accessories2 from '../../../assets/accessories2.jpg'
import accessories3 from '../../../assets/accessories3.jpg'
import accessories4 from '../../../assets/accessories4.webp'

export default function Accessories() {
  return (
    <div className="category">
      <h3>Accessories</h3>
      <div className="product-grid">
        <img src={accessories2} alt="Bag" />
        <img src={accessories3} alt="Jewelry" />
        <img src={accessories4} alt="Watch" />
      </div>
    </div>
  )
}
