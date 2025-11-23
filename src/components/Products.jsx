import React from "react";
import toner from "../assets/toner.webp";
import blush from "../assets/blush.webp";
import primer from "../assets/primer.jpg";
import compact from "../assets/compact.jpeg";

const products = [
  { id: "p1", name: "Radiance Toner", price: "599", img: toner, tag: "Top rated" },
  { id: "p2", name: "Velvet Blush", price: "349", img: blush, tag: "New" },
  { id: "p3", name: "Silk Primer", price: "799", img: primer, tag: "Bestseller" },
  { id: "p4", name: "Compact SPF", price: "499", img: compact, tag: "Trending" }
];

export default function Products({ addToCart }) {
  return (
    <section id="products" className="products">
      <h2>Trending Products For You</h2>
      <div className="product-grid">
        {products.map((p, index) => (
          <div
            className="product-card floating"
            key={p.id}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="p-image">
              <img src={p.img} alt={p.name} />
              <div className="p-tag">{p.tag}</div>
            </div>
            <div className="p-body">
              <h4>{p.name}</h4>
              <div className="p-price">₹{p.price}</div>
              <div className="p-cta">
                <button className="ghost-btn small">Details</button>
                <button
                  className="primary-btn small"
                  onClick={() => addToCart({ ...p, price_raw: p.price })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
