import React from "react";
import "./TrustSection.css";
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
                    <img src="C:\Users\pc\Documents\reactApp\my-app\app\worldwide-3.svg"alt="" />
                    <h3>The largest public crypto company</h3>
                    <p>We operate with financial transparency.</p>
                </div>
                <div className="card">
                    <img src="C:\Users\pc\Documents\reactApp\my-app\app\safe-3.svg"alt="" />
                    <h3>You can always contact our support team for quick solutions to common problems.</h3>
                    <p>Our risk management measures are designed to protect your assets.</p>
                </div>
                <div className="card">
                    <img src="C:\Users\pc\Documents\reactApp\my-app\app\support-5.svg" alt="" />
                    <h3>Get the help you need, when you need it</h3>
                    <p>You can always contact our support team for quick solutions to common problems.</p>
                </div>
                <div className="card">
                    <img src="C:\Users\pc\Documents\reactApp\my-app\app\economyGlobal-3.svg" alt="" />
                    <h3>Industry best practices</h3>
                    <p>Coinbase supports a variety of the most popular digital currencies.</p>
                </div>

            </div>
        </div>
    )
}

export default TrustSection;