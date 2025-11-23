import React from "react";

const services = [
  { id: "s1", title: "Free Returns", desc: "Return within 30 days, no questions." },
  { id: "s2", title: "Secure Payment", desc: "Multiple secure payment options." },
  { id: "s3", title: "Customer Care", desc: "24/7 support via chat and email." }
];

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Services To Help You Shop</h2>
      <div className="service-grid">
        {services.map(s => (
          <div className="service-card" key={s.id}>
            <div className="service-icon">✨</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}