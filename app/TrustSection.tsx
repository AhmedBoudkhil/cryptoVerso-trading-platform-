import React from "react";
import "./TrustSection.css";


const TrustSection: React.FC = () => {
  return (
    <div className="section-container">
      <div className="header">
        <div>
          <h3>The most trusted cryptocurrency exchange</h3>
          <p>
            We're the most trusted place for people and businesses to buy, sell,
            and manage crypto.
          </p>
        </div>
        <button className="sign-up">Sign up</button>
      </div>

      <div className="cards">
        <div className="card">
          <img src="assets/world-wide-3.svg" alt="Worldwide reach" />
          <h3>The largest public crypto company</h3>
          <p>We operate with financial transparency.</p>
        </div>

        <div className="card">
          <img src="assets/safe-3.svg" alt="Safe storage" />
          <h3>Your assets are protected</h3>
          <p>
            Our risk management measures are designed to protect your assets.
          </p>
        </div>

        <div className="card">
          <img src="assets/support-5.svg" alt="Support team" />
          <h3>Get the help you need, when you need it</h3>
          <p>
            You can always contact our support team for quick solutions to common
            problems.
          </p>
        </div>

        <div className="card">
          <img src="assets/economyGlobal-3.svg" alt="Industry practices" />
          <h3>Industry best practices</h3>
          <p>
            Coinbase supports a variety of the most popular digital currencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
