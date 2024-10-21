import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Loyalty Program. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#1E3A8A',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

export default Footer;
