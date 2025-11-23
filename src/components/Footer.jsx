import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer" style={{ background: "#f7f7f7", padding: "40px 0" }}>
      <div className="container footer-inner" 
           style={{
             display: "flex",
             justifyContent: "space-between",
             alignItems: "flex-start",
             gap: "40px",
             flexWrap: "wrap"
           }}
      >
        
        {/* Logo + Tagline */}
        <div style={{ maxWidth: "260px" }}>
          <img 
            src={logo} 
            alt="LunaGlow Beauty" 
            className="footer-logo"
            style={{ width: "50px", marginBottom: "15px" }}

          />
          <p style={{ lineHeight: "1.6", color: "#555" }}>
            Made with care. Clean ingredients. Beautiful skin.
          </p>
        </div>

        {/* Footer Links */}
        <div className="links"
          style={{
            display: "flex",
            gap: "60px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <h5 style={{ marginBottom: "10px" }}>Company</h5>
            <a href="#services" style={{ display: "block", margin: "6px 0", color: "#333" }}>About</a>
            <a href="#services" style={{ display: "block", margin: "6px 0", color: "#333" }}>Careers</a>
          </div>

          <div>
            <h5 style={{ marginBottom: "10px" }}>Support</h5>
            <a href="#services" style={{ display: "block", margin: "6px 0", color: "#333" }}>FAQ</a>
            <a href="#services" style={{ display: "block", margin: "6px 0", color: "#333" }}>Contact</a>
          </div>
        </div>

      </div>

      {/* Legal Section */}
      <div className="legal" 
           style={{
             textAlign: "center",
             marginTop: "30px",
             paddingTop: "15px",
             borderTop: "1px solid #ddd",
             color: "#666"
           }}
      >
        © {new Date().getFullYear()} LunaGlow Beauty · All rights reserved
      </div>
    </footer>
  );
}