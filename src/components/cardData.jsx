import React from 'react';
import CardGrid from '../assets/Card';

const CardData = () => {
  const cardsData = [
    {
      
      title: 'Class 9th & 10th',
      description: 'Guidance for right Combination and subjects (stream selection)',
      backgroundColor: 'indigo',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/b5d6/038e/64a788b43f9cafab89093807ad832598?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Plibz~Fa2s1Hb2xmYM2TLwcsqKJiVu33UIpuof1yMFm02SYgT6chN29xv7NONxJvxMc1Np5SIQ3C~SR5nIcdhedGrqtHLYzf2SEF4LkIzw4q6JVAuqfK6k~q0VgayzKNsAqTSclTlBDf3N8BuHVwTjlmGGYLpxOWmtuI15PjgMWRrTgS9X1iOyP-r8lFQlu0OQhjoJYQnp-8SKjlcVLVbqhbJtI41iOGVhUuHvNGqj5CLaoSaLC0EmWtPfI~zcaYykHGwQT0mfdRhhXm86nsP6i9A2egIqAfj0cklL-LD~vaq-fMW6KQs~84hjMq8mtn61M3mxnRq9Fa6QhkJXD3Jw__',
    },
    {
      
      title: 'Class 11th & 12th',
      description: 'Guidance for best Course & Selecting right institutes',
      backgroundColor: 'red',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/eb42/5cfb/c7acece34d29b189fc4ef0b760550210?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCaV43sme9Nm~OtD8KviSX-~ylgS8pdq1GAmDL9fjeLwVHrIoOO4ZxLv-d~vE9pSnIt1HvBLLhsAALzTJ1mEr2K81BTVDm-wjCFUAxDwABXwzdyZFEblXdv5FWMFzLSATrhQYKMkrnwzkN-dMHc3YrTH2lIw3dw5ofs3icPcneO2DLy4~5yDY~oPyG4uKazTlnl3ukRz1ndJeiucadYzg2e9xADANAyquFQCmyI8KMpf2P6fPGz1xb846T7hHXbHuIl4KIhPzZ4Mjeg~-87Jy5Sa09KLG8WL8cmBZA13fm6Z6TzYF--r-o4N4F12lqIRfLFizYFCkn9BuSGMhCwv8g__',
    },
    {
      
      title: 'College Students',
      description: 'Guidance for right Profession',
      backgroundColor: 'yellow',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/9c21/8cd6/84ab405d5bf06698e167b91c58b03736?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y34lOwhHkD8qoBaHAPN1Of1lExscLOLXYkFoasiaXpLkiRyI2n~SFCMu4KEVqUxZKVSXxvi3YzVSsm9ZSiPrGVBH04njZd5LliFYXY2sRBknmeJYYO3eZ4xDZ-TXVCKWwP5AiltshYjnavBHEHatb8aRwbJiA1IXu~pvdbpf~L53Nu2boTGCesxOO0Plhf5QnpNFwMLEeSLNZD7JAQs17F-EQL1cQhPlcWYpZvzKTdfM-rz~OzZNhLefCzo49Kmr86OoOFx8knb8R2Hiwf1W89OeAJzrIpPlOvdq0yZK04lLCXGgQKDJ2H6dXdHpaJlk6Ex1QmD4eElvfCkc8pYWUQ__',
    }
  ];

  return (
    <>
    <div className='flex justify-center items-center flex-col text-center mb-20'>

  <h1 className='text-4xl font-bold mb-4'>Empowering Your Future is our mission.</h1>

  <p className='text-xl font-bold'>Guide4Careers: Expert career counseling navigating you from high school to dream career & beyond.</p>
</div>

      <div className="min-h-screen mt-0 sm:-mt-20 md:-mt-40 mx-5 flex justify-center items-center">
        <CardGrid cards={cardsData} />
      </div>

    </>
  );
}; 

export default CardData;
