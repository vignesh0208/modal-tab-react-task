import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className='loading-spinner-container'>
      <div className='spinner'></div>
      <p className='loading-text'>Please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
