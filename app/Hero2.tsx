"use client";
import React from "react";
import cryptocoins from "./assets/download2.avif";
import "./Hero2.css";



const Hero2 :React.FC = () =>{
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

export default  Hero2;
