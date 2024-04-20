import React from 'react';

const GradientBackground = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="absolute bottom-10 left-0 w-full z-0"
      style={{ zIndex: -1 }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#3E66DF" />
        </linearGradient>
      </defs>
      <path
        className=""
        fill="url(#gradient)"
        fillOpacity="0.4"
        d="M0,224L26.7,213.3C53.3,203,107,181,160,186.7C213.3,192,267,224,320,213.3C373.3,203,427,149,480,133.3C533.3,117,587,139,640,154.7C693.3,171,747,181,800,176C853.3,171,907,149,960,170.7C1013.3,192,1067,256,1120,288C1173.3,320,1227,320,1280,288C1333.3,256,1387,192,1413,160L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
      />
    </svg>
  );
};

export default GradientBackground;
