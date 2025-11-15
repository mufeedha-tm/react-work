import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#4a2c2a', color: '#fff', padding: '40px 20px' }}>
      <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <h3>Velvet & Oak</h3>
          <p>Elegance meets comfort. Discover timeless essentials crafted to last.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
            <li><a href="/shop" style={{ color: '#fff', textDecoration: 'none' }}>Shop</a></li>
            <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>Instagram | Facebook | Pinterest</p>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
        © 2025 Velvet & Oak. All rights reserved.
      </p>
    </footer>
  )
}
