import React from 'react';

const LoyaltyCard = ({ userName, points }) => {
  return (
    <div style={cardStyle}>
      <h3>{userName}'s Loyalty Card</h3>
      <p>Loyalty Points: {points} LTY</p>
    </div>
  );
};

const cardStyle = {
  background: 'white',
  color: '#1E3A8A',
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  width: '300px',
  margin: '20px auto',
};

export default LoyaltyCard;
