import React from "react";
import phone1 from "./assets/download1.avif";
import "./Hero.css";
import "./globals.css";


export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-left">
                <h1>The future of money is here</h1>
                <p>
                    We're the most trusted place for people and businesses to buy,
                    sell, and manage crypto.

                </p>

                <div className="sign-up">
                    <input type="email" placeholder="satoshi@nakamoto.com" />
                    <button>Sign Up</button>
                </div>
            </div>
            <div className="hero-right">
                <img src={phone1.src} alt="Crypto app 1"  />

            </div>
        </div>
    )
}