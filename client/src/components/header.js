import React from 'react';

const Header = ({ account }) => {
  return (
    <header>
      <h1>Loyalty Program</h1>
      <p>Connected account: {account}</p>
    </header>
  );
};

export default Header;
