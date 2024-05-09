import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './steplines.css';

const steps = [
  { id: '01', label: 'Advance Assessment & Best-Fit Matches', position: 'bottom' },
  { id: '02', label: 'Report As per Exam & Best suited options for you', position: 'top' },
  { id: '03', label: 'Talk to a Career Coach: Book your 1-on-1 session today!', position: 'bottom' },
  { id: '04', label: 'Personalized Guidance from Expert', position: 'top' },
  { id: '05', label: 'Career Roadmap Planner', position: 'bottom' },
];

const WorkingSteps = () => {
  const [isInView, setIsInView] = useState(false);

  const handleInView = (inView) => {
    setIsInView(inView);
  };

  return (
    <InView onChange={handleInView}>
      <div className='min-h-[80vh] place-content-center'>
        <div className=" flex justify-between sm:p-[40px] px-8 mx-auto max-w-[1000px] relative">
          <motion.div
            className="absolute h-[2px] bg-[#3D5AF1] -left-[100px] "
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            initial={{ width: 0 }}
            animate={isInView ? { width: '1200px' } : {}}
            transition={{ duration: 0.8,  delay: 0.8 , ease: 'easeInOut' }}
          />

          {steps.map((step, index) => (
            <motion.div
              className="step"
              key={step.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className={`vertical-line ${step.position}`}
                initial={{ height: 0 }}
                animate={isInView ? { height: 80 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              />
              {step.position === 'top' && (
                <>
                  <motion.div
                    className="label max-sm:max-w-[100px] max-lg:max-w-[120px] top text-sm md:text-xl font-medium"
                    initial={{ y: -20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    {step.label}
                  </motion.div>
                  <motion.div
                    className="absolute top-14 text-[#3D5AF1] md:text-2xl font-bold"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                  >
                    {step.id}
                  </motion.div>
                </>
              )}
              <motion.div
                className="circle text-lg font-bold"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              >
                <h1 className='bg-[#22D1EE] w-[15px] h-[15px] md:h-[30px] md:w-[30px] rounded-full ' />
              </motion.div>

              {step.position === 'bottom' && (
                <>
                  <motion.div
                    className="label mx-auto max-sm:max-w-[100px] max-lg:max-w-[120px] bottom text-sm md:text-xl font-medium"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                  >
                    {step.label}
                  </motion.div>
                  <motion.div
                    className="absolute bottom-14 text-[#3D5AF1] md:text-2xl font-bold"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                  >
                    {step.id}
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </InView>
  );
};

export default WorkingSteps;