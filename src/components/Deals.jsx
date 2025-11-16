import React from "react";
import serum from "../assets/serum.webp";
import cream from "../assets/cream.avif";
import lipstick from "../assets/lipstick.webp";
import mask from "../assets/mask.jpg";

const deals = [
  { id: "d1", name: "Vitamin C Serum", price: "899", old: "1299", img: serum },
  { id: "d2", name: "Hydra Cream", price: "699", old: "1000", img: cream },
  { id: "d3", name: "Matte Lipstick", price: "299", old: "499", img: lipstick },
  { id: "d4", name: "Glow Mask", price: "399", old: "699", img: mask }
];

export default function Deals({ addToCart }) {
  return (
    <section id="deals" className="deals">
      <h2>Today's Best Deals</h2>
      <div className="deals-grid">
        {deals.map((d) => (
          <article className="deal-card" key={d.id}>
            <div className="deal-thumb">
              <img src={d.img} alt={d.name} />
            </div>
            <div className="deal-body">
              <h4>{d.name}</h4>
              <div className="deal-price">
                <span className="price">₹{d.price}</span>
                <span className="old">₹{d.old}</span>
              </div>
              <div className="deal-actions">
                <button className="ghost-btn small">View</button>
                <button
                  className="primary-btn small"
                  onClick={() => addToCart({ ...d, price_raw: d.price })}
                >
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
