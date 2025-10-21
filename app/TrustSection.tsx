import React from "react";
import "./TrustSection.css";
<<<<<<< HEAD
import safe from "./assets/icons/safe-3.svg";
import suport from "./assets/icons/support-5.svg";
import world from "./assets/icons/worldwide-3.svg";
import economy from "./assets/icons/economyGlobal-3.svg";
=======


import safe from "../assets/safe-3.svg";
import worldwide  from "../assets/worldwide-3.svg"
import global from "../assets/economyGlobal-3.svg"
import support from "../assets/support-5.svg"


>>>>>>> 315f124 (we add icnons and styles to trustsection adn enhanced svg)

const TrustSection : React.FC = () => {
    return(
        <div className="sectoin-container">
            <div className="header">
                <div>
                    <h3>The most trusted cryptocurrency exchange</h3>
                    <p>We're the most trusted place for people and businesses to buy, sell, and manage crypto.</p>

                </div>
                <button className="sign-up">Sign up</button>
            </div>
            
            <div className="cards">
                <div className="card">
<<<<<<< HEAD
                    <img src={world}alt="" />
=======
                    <img src="assets/worldwide-3.svg" alt="" />
>>>>>>> 315f124 (we add icnons and styles to trustsection adn enhanced svg)
                    <h3>The largest public crypto company</h3>
                    <p>We operate with financial transparency.</p>
                </div>
                <div className="card">
<<<<<<< HEAD
                    <img src={safe}alt="" />
=======
                    <img src="/assets/safe-3.svg" alt="" />
>>>>>>> 315f124 (we add icnons and styles to trustsection adn enhanced svg)
                    <h3>You can always contact our support team for quick solutions to common problems.</h3>
                    <p>Our risk management measures are designed to protect your assets.</p>
                </div>
                <div className="card">
<<<<<<< HEAD
                    <img src={suport} alt="" />
=======
                    <img src="/assets/support-5.svg" alt="" />
>>>>>>> 315f124 (we add icnons and styles to trustsection adn enhanced svg)
                    <h3>Get the help you need, when you need it</h3>
                    <p>You can always contact our support team for quick solutions to common problems.</p>
                </div>
                <div className="card">
<<<<<<< HEAD
                    <img src={economy} alt="" />
=======
                    <img src="/assets/economyGlobal-3.svg" alt="" />
>>>>>>> 315f124 (we add icnons and styles to trustsection adn enhanced svg)
                    <h3>Industry best practices</h3>
                    <p>Coinbase supports a variety of the most popular digital currencies.</p>
                </div>

            </div>
        </div>
    )
}

export default TrustSection;