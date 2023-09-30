import React from "react";
import "./stylesheets/Footer.css";

export default function Footer() {
  const dev_credits_style = { fontWeight: "bold" };

  return (
    <footer>
      <div className="developer-credits-section">
        Made by <span style={dev_credits_style}>Temax Fullstack</span>
      </div>
    </footer>
  );
}
