import React from "react";
import "./TrustSection.css";
import safe from "./assets/icons/safe-3.svg";
import suport from "./assets/icons/support-5.svg";
import world from "./assets/icons/worldwide-3.svg";
import economy from "./assets/icons/economyGlobal-3.svg";

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
                    <img src={world}alt="" />
                    <h3>The largest public crypto company</h3>
                    <p>We operate with financial transparency.</p>
                </div>
                <div className="card">
                    <img src={safe}alt="" />
                    <h3>You can always contact our support team for quick solutions to common problems.</h3>
                    <p>Our risk management measures are designed to protect your assets.</p>
                </div>
                <div className="card">
                    <img src={suport} alt="" />
                    <h3>Get the help you need, when you need it</h3>
                    <p>You can always contact our support team for quick solutions to common problems.</p>
                </div>
                <div className="card">
                    <img src={economy} alt="" />
                    <h3>Industry best practices</h3>
                    <p>Coinbase supports a variety of the most popular digital currencies.</p>
                </div>

            </div>
        </div>
    )
}

export default TrustSection;