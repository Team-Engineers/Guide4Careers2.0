import React from 'react';
import '../components/styles/styles.css'; // Import your CSS styles

import GradientBackground3 from '../assets/Gradientbackground3';

const GetReport = () => {
  return (
    <div className="container">
      {/* SVG Wave Background */}
      <GradientBackground3 className="svg-background" />

      {/* Content */}
      <div className="content-container">
        <h2>Take a Free Psychometric Test Today! Know How You Feel.</h2>
      </div>
    </div>
  );
};

export default GetReport;
