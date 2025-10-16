"use client";

import cryptocoins from "./assets/download2.avif";
import "./Hero2.css";

export default function Hero2() {
  return (
    <section className="hero2-container">
      <div className="hero2-left">
        <p className="hero2-subtitle">Take control of your money</p>
        <h1 className="hero2-title">
          Start your portfolio today and discover crypto
        </h1>
      </div>

      <div className="hero2-right">
        <img src={cryptocoins.src} alt="Crypto coins" className="hero2-image" />
      </div>
    </section>
  );
}
