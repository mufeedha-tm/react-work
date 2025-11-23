import React from "react";
import heroImg from "../assets/hero-beauty.jpg";
import productSerum from "../assets/serum.webp";
import maskImg from "../assets/mask.jpg";
import creamImg from "../assets/cream.avif";

export default function Hero({ addToCart }) {
  const sample = { id: "p-hero", name: "Glow Serum", price: "899", img: productSerum };

  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <div className="eyebrow">New — Spring Glow Collection</div>
        <h1 className="hero-title">Radiant Skin, Confident You</h1>
        <p className="hero-desc">
          Curated cruelty-free skincare and beauty essentials. Clean formulas,
          luminous results — made for your daily glow ritual.
        </p>

        <div className="hero-controls">
          <button className="primary-btn" onClick={() => addToCart({...sample, price_raw: sample.price})}>
            Add Glow Serum
          </button>
          <button className="ghost-btn">Learn More</button>
        </div>

        <div className="trust">
          <div className="trust-item">Free Shipping over ₹1,500</div>
          <div className="trust-item">30-day returns</div>
          <div className="trust-item">Secure payments</div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card floating">
          <img src={heroImg} alt="Beauty hero" />
        </div>

        <div className="small-cards">
          <div className="small-card fade-up">
            <img src={productSerum} alt="Glow Serum" />
            <div className="sc-text">
              <strong>Glow Serum</strong>
              <span>Best seller</span>
            </div>
          </div>

          <div className="small-card fade-up delay">
            <img src={creamImg} alt="Hydrating Mask" />
            <div className="sc-text">
              <strong>Hydrating Cream</strong>
              <span>New</span>
            </div>
          </div>

          <div className="small-card fade-up delay">
            <img src={maskImg} alt="Mask" />
            <div className="sc-text">
              <strong>Glow Mask</strong>
              <span>Limited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}