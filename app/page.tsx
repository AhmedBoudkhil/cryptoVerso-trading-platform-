"use client"
import React, { useState } from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";    
import Features from "./features"
import "./globals.css";
import "./Navbar.css";

export default function Navbar() {

    const[isOpen,setOpen] = useState(false)
    
    return(
        <>
            <nav className="navbar">
                <div className="nav-logo"><a href="">CryptoVerse</a></div>
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    <a href="#">Home</a>
                    <a href="#">Markets</a>
                    <a href="#">News</a>
                    <a href="#" className="sing-up">Sign Up</a>
                </div>

                <div className="nav-toggle" onClick={() => setOpen(!isOpen)}>

                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

            </nav>
            <Hero />
            <Hero2 />
            <Features />
        </>
    )
}
