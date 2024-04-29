import  { useState, useEffect } from 'react';
// import srcimg1 from '../src/assets/img/screen-avtr.gif';


const Banner = () => {
  return (
    <div className="">

    </div>

  );
};

const WordAnimation = () => {
  const words = ['Welcome  ', 'Namasthe', 'Radhe Radhe ', 'Bonjuer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change the duration as needed

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="text-yellow-500 text-5xl font-bold">
      <Word text={words[currentWordIndex]} />
      <span className="ml-4 text-5xl">Dev !</span>
    </span>
  );
};

const Word = ({ text }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate-word');

    const timeout = setTimeout(() => {
      setAnimationClass('');
    }, 2000); // Change the duration as needed

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={`word-animation ${animationClass}`}>
      {text?.split('').map((letter, index) => (
        <span key={index} style={{ animationDelay: `${index * 50}ms` }}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default Banner;
