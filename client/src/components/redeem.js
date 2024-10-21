import React, { useState } from 'react';

const Redeem = ({ onRedeem }) => {
  const [pointsToRedeem, setPointsToRedeem] = useState('');

  const handleRedeem = () => {
    if (pointsToRedeem > 0) {
      onRedeem(pointsToRedeem);
      setPointsToRedeem('');
    } else {
      alert('Please enter a valid amount to redeem');
    }
  };

  return (
    <div style={redeemStyle}>
      <h2>Redeem Your Points</h2>
      <input
        type="number"
        value={pointsToRedeem}
        onChange={(e) => setPointsToRedeem(e.target.value)}
        placeholder="Enter points to redeem"
        style={inputStyle}
      />
      <button onClick={handleRedeem} style={buttonStyle}>Redeem</button>
    </div>
  );
};

const redeemStyle = {
  textAlign: 'center',
  margin: '20px',
  padding: '20px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  margin: '10px',
  width: '80%',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Redeem;
