import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './steplines.css';

const steps = [
  { id: '01', label: 'Advance Assessment & Best-Fit Matches', position: 'bottom' },
  { id: '02', label: 'Report As per Exam & Best suited options for you', position: 'top' },
  { id: '03', label: 'Talk to a Career Coach: Book your 1-on-1 session today!', position: 'bottom' },
  { id: '04', label: 'Personalized Guidance from Expert', position: 'top' },
  { id: '05', label: 'Career Roadmap Planner', position: 'bottom' },
];

const WorkingSteps = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const lineAnimation = {
    width: `${Math.min(100, scrollY / 7)}%` // Adjusted to complete faster
  };

  return (
    <div className='my-32'>
      <div className="timeline">
        <div className="line" style={lineAnimation}></div>
        {steps.map((step, index) => (
         <div className="step" key={step.id} style={{ opacity: Math.min(1, scrollY / 150 - index * 1) }}>             <div className={`vertical-line ${step.position}`}></div>
            {step.position === 'top' && <div className="label top text-xl font-bold">{step.label}</div>}
            <div className="circle text-lg font-bold">{step.id}</div>
            {step.position === 'bottom' && <div className="label bottom text-xl font-bold">{step.label}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingSteps;
