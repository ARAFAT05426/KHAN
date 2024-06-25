import React from 'react';
import './LoadingBar.css'; // Import your updated custom CSS file

const LoadingBar = () => {
  return (
    <div className="loader-container">
      <span className="loader-bar"></span>
      <span className="loader-bar"></span>
      <span className="loader-bar"></span>
      <span className="loader-bar"></span>
      <span className="loader-bar"></span>
      {/* <span className="loader-bar"></span> */}
    </div>
  );
};

export default LoadingBar;
