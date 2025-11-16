import React from "react";

import catSkincare from "../assets/cat-skincare.webp";
import catMakeup from "../assets/cat-makeup.jpg";
import catFragrance from "../assets/cat-fragrance.webp";
import catTools from "../assets/cat-tools.jpg";

const categories = [
  { id: "c1", title: "Skincare", img: catSkincare },
  { id: "c2", title: "Makeup", img: catMakeup },
  { id: "c3", title: "Fragrance", img: catFragrance },
  { id: "c4", title: "Tools", img: catTools }
];

export default function Categories() {
  return (
    <section id="categories" className="categories">
      <h2>Shop Top Categories</h2>
      <div className="cats-grid">
        {categories.map(cat => (
          <div className="cat-card" key={cat.id}>
            <div className="cat-img">
              <img src={cat.img} alt={cat.title} />
            </div>
            <div className="cat-title">{cat.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
