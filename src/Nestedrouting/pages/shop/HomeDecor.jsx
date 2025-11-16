import React from 'react'
import homedecor2 from '../../../assets/homedecor2.jpg'
import homedecor3 from '../../../assets/homedecor3.jpg'
import homedecor4 from '../../../assets/homedecor4.webp'

export default function HomeDecor() {
  return (
    <div className="category">
      <h3>Home Decor</h3>
      <div className="product-grid">
        <img src={homedecor2} alt="Sofa" />
        <img src={homedecor3} alt="Plant Decor" />
        <img src={homedecor4} alt="Table" />
      </div>
    </div>
  )
}
