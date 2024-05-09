import React from 'react';
import PlanCard from './PlanCard.jsx';
import validImage from '../../assets/images/validImage.png'; // Import your valid image
import invalidImage from '../../assets/images/invalidImage.png'; // Import your invalid image

const PriceCard = () => {
  const previewFeatures = [
    { text: 'Stream Treatment', isValid: true, imageValid: validImage, imageInvalid: invalidImage },
    { text: 'Career Content', isValid: false, imageValid: validImage, imageInvalid: invalidImage },
    { text: 'Career Counselling', isValid: false, imageValid: validImage, imageInvalid: invalidImage },
  ];

  const learnFeatures = [
    { text: 'Stream Treatment', isValid: true, imageValid: validImage, imageInvalid: invalidImage },
    { text: 'Career Content', isValid: true, imageValid: validImage, imageInvalid: invalidImage },
    { text: 'Career Counselling', isValid: false, imageValid: validImage, imageInvalid: invalidImage },
  ];

  const exploreFeatures = [
    { text: 'Stream Treatment', isValid: true, imageValid: validImage, imageInvalid: invalidImage },
    { text: 'Career Content', isValid: true, imageValid: validImage, imageInvalid: invalidImage },
    { text: 'Career Counselling', isValid: true, imageValid: validImage, imageInvalid: invalidImage },
  ];

  return (
    <div className='flex flex-col items-center p-4'>
      <div className='mb-2 mt-12 text-center'>
        <h1 className='mb-16 text-3xl font-black text-black'>
          PLANS & PRICING
        </h1>
      </div>
      <div className='flex flex-wrap justify-center gap-8 pb-10 xl:flex-row'>
        <PlanCard
          color='rgba(106, 138, 255, 0.5)'
          name='PREVIEW'
          price='Rs Free'
          description='Orientation Style Assessment'
          features={previewFeatures}
          btnText='Subscribe now'
        />
        <PlanCard
          style={{ backgroundImage: 'linear-gradient(to bottom right, #6A8AFF, #5EE2FF)', borderRadius: '8px', padding: '20px' }}
          color='rgba(106, 138, 255, 0.6)'
          name='LEARN'
          price='Rs 2400'
          description='Stream Assessment'
          features={learnFeatures}
          btnText='Subscribe now'
        />
        <PlanCard
          style={{ backgroundImage: 'linear-gradient(to bottom right, #6A8AFF, #5EE2FF)', borderRadius: '8px', padding: '20px' }}
          color='#6A8AFF'
          name='EXPLORE'
          price='Rs 9400'
          description='Stream Assessment + Counselling'
          features={exploreFeatures}
          btnText='Subscribe now'
        />
      </div>
    </div>
  );
};

export default PriceCard;
