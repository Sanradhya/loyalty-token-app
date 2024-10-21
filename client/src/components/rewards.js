import React, { useState } from 'react';

const Reward = ({ onReward }) => {
  const [userAddress, setUserAddress] = useState('');
  const [pointsToIssue, setPointsToIssue] = useState('');

  const handleReward = () => {
    if (userAddress && pointsToIssue > 0) {
      onReward(userAddress, pointsToIssue);
      setUserAddress('');
      setPointsToIssue('');
    } else {
      alert('Please enter valid details');
    }
  };

  return (
    <div style={rewardStyle}>
      <h2>Issue Reward Points</h2>
      <input
        type="text"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
        placeholder="Enter user's wallet address"
        style={inputStyle}
      />
      <input
        type="number"
        value={pointsToIssue}
        onChange={(e) => setPointsToIssue(e.target.value)}
        placeholder="Enter points to issue"
        style={inputStyle}
      />
      <button onClick={handleReward} style={buttonStyle}>Issue Points</button>
    </div>
  );
};

const rewardStyle = {
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

export default Reward;
