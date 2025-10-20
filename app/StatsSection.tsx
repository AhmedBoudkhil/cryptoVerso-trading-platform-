import React from "react";


const StatsSEction : React.FC = () =>{
  return (
    <section className="
    ">
      <div className="stats-header">
        <h1>Get started in a few minutes</h1>
        <p>Create an account, link your bank account, and start buying & selling.</p>
        <button className="create-btn">Create account</button>
      </div>
      <div className="stats-grid">
        <div className="stat-box">
          <h1>$145B</h1>
          <p>QUARTERLY VOLUME TRADED</p>
        </div>
        <div className="stat-box">
          <h1>100+</h1>
          <p>COUNTRIES SUPPORTED</p>
        </div>
        <div className="stat-box">
          <h1>$130B</h1>
          <p>ASSETS ON PLATFORM</p>
        </div>
      </div>


    </section>

  )
}

export default StatsSEction