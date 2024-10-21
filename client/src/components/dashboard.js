import React from 'react';

const Dashboard = ({ balance }) => {
  return (
    <div className="container">
      <h2>Your Loyalty Points</h2>
      <p>{balance} LTY</p>
      <button>Redeem Points</button>
    </div>
  );
};

export default Dashboard;
