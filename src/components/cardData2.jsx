// CardData2.js

import React from 'react';
import WaveSVG from '../assets/GradientBackground2';
import Card2 from '../assets/Card2';

const CardData2 = () => {
  return (
    <div className="relative ">
        
      {/* Content within the background */}
      <div className="flex justify-center items-center flex-col text-center mt-0 sm:-mt-20 md:-mt-20 md:mb-10 z-10">
        <h1 className="text-4xl font-bold mb-4">Why Choose Us?</h1>
      </div>

      {/* Container for Cards */}
      <div className="relative z-10">
        <div className="flex justify-center items-center min-h-screen ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl p-4">
            {/* Example Card component */}
            <div className="flex flex-col">
              <Card2
              description="Enable students to identify their best-fit career with our world-class career assessment and personalised guidance."
              imageUrl="https://s3-alpha-sig.figma.com/img/b290/043f/8c64eb10c6d65bfcb31b1baff8f33b3e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7~llZUWxhUTy~ZI4N~z1MASH7NkO3JaEM-LftDnKRJfsxdtgraxOs7rHXlUwblnkSY9qbyUhu6l6h4JXr9xGcYkHSJ4lepXgwabVdu2fuRcI9zfRt2i~JM-MRWOb8ORMt5fILd6Gd3zImN9S~isH0MWziW8DUWWdrsgbQ9cAI5XSCksB5NrFaiOhyVa~-iFuqRG1-BRKi76abUjlbcpPSzK1fDE9r9BKcNfz1Dav-Uqrj2BvVbGGcKsM4jEYvA3XDdUYRLnzMllW0vBpW6G-LZ9kNfdcbT97Z~r6njc~7bs4M3j5eo2AhMM9nx5Bml1pgDADH2JSv9gKHcTFs0UeQ__"
              bgColor="indigo-400"
              height="250px" 
            />
          </div>
          <div className="flex flex-col">
            <Card2
              description="Empower students to learn all about the professional world with virtual career simulations, exhaustive career library, career blogs and vlogs."
              imageUrl="https://s3-alpha-sig.figma.com/img/a821/6231/b6f5b1538733804ead23ebbf248ec824?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsYL4pbBx96~sAzN0snw0cmGBthewSxqsUyjAPdtJWQKs8zpkupmLnje73gXGvAoTBE0~zDE0VQ1tCZUQnurfHghkMJISGbL75o1U2BhFegdAvuhXVsz749Ye0WSRhm0kf0xDkb-uHtV-5W09WLc3VsHUW84TUG8Ng08Ih4IfTqDDuNt~THvlO63J3yw1cEZXWDq7Zee5EsMk2OfvKHN783F1uRaTfsJy~pVtYDJ~CZse3Qo38VufaAp-mKWdYv1Rx7VjFb2LDaam9UZmpTwdbrkITnoQ2qdCOQbos6-uZMm0EtLS~u5wpzLXoTNjgKAIcUBKicpgp3cBWGkUMnPpw__"
              bgColor="indigo-400"
              height="250px" 
            />
          </div>
          <div className="flex flex-col">
            <Card2
              description="Pave student’s way to their dream college with our end-to-end college application guidance, scholarship drive and corporate internship program."
              imageUrl="https://s3-alpha-sig.figma.com/img/1b5a/9e44/842e95aba4d12271ffedd1bb30772453?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ds5TwEdUQQXBnkY7vHyvS1uJfKchrHnsHaAmXPYq0QRD1JWgV9YFz5lEBCCJqYXzJNwemrK5~Z~~pS4utRTUv3KzEL7FpL3tFyB2uT~tUv01cTeVMGJNn7Z2BA9pulP6HqGC0qL3Hhw0VMQx4C-YbD85WvpXqy44sQVjqRKpSxqUJmbrXWj~YUEBI7NEjtSgqJQT-qhygKL4urVpUxmZkbG9Hvmp6RRdA2m6Htm-zxees5c9LFO1rAlz~nLqMHiJ-hQfusEZVaLy-dli2eu-fBfMyFi8bcqk74wsChdgWfAcFQPhTRMvUHkBXXgx3iC~zuxivuhDL5q5xgmxDJcfKg__"
              bgColor="indigo-400"
              height="250px" 
            />
          </div>
          <div className="flex flex-col ">
            <Card2
              description="Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy"
              imageUrl="https://s3-alpha-sig.figma.com/img/ae4c/39a4/6d2a64b1fde925157ad146175290c921?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=puje0Tx-rlKgOO8LqZQPPsUl5YbBEG0MpoqKSdcjBszsZkSnllPcXMTVKlryB5WiH4owTxJj9DkljuFtsicGWSZFeKkZ3kDyPCxm5sat0Cxqexi3CtRk4zl6rzuMEu9-8QYF0V41UMfGTJrT5qVjRCAfdztVtq1IA-BWWv5fsl0AS1oHWjJg-7vLUqGL40BLADc9DIkfDWt~MsxX0VV~W9~VJe6pJTlLSJEwfqKoLsWm~XGBnGYgkjo2FPG41cK8wWfg6GbRYu3wZyT976ww-GBHSQVEihg34gqi9uCuaQIfS6W9fn50GJ5hgsHvdHWBmxqyyHpUmsv1hAJmG6dAkg__"
              bgColor="red-300"
              height="250px" 
            />
          </div>
          <div className="flex flex-col ">
            <Card2
              description="Empower educators to become International Certified Career Coaches and build a career in career guidance & counselling"
              imageUrl="https://s3-alpha-sig.figma.com/img/3861/f431/5282cb25e8682d340a557d0f9ad4826e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XEMUeIu5GDP6xuKxIb5P2NQVuN7x~ldLwj~3Yrq4-nRY7d2VsPKEFf1a6PoQReW7d7NeFVLtNDHCkikx2XwiLgF1FNRs2Khd9pUvOv7x44z88dbM0W1UCE7cbmcESJ3zKD-7Ag2VLtkcX25Nz1-hZ6jME1hvX0qF286OHYOKoqfqbRqrwn5JOiXyZHV-mSuOvQp5tecjDj4alllvSoG~KGH8xbQ9b~AA0smjXMZhzvBJe28Uoc0VgFHWPPEEd7Bt5e3mSy0Y4OLrTuaiNvsiEHvLnks6Lgj0Fo24NJ5goZUarCaYIieLuUns0E2tXI37zBAs4uPT8UIWYZZ96Pcz8A__"
              bgColor="red-300"
              height="250px"
            />
          </div>
          <div className="flex flex-col ">
            <Card2
              description="Revolutionary assessment platform and technology driven career guidance solutions for educators to boost their career guidance & counselling practice"
              imageUrl="https://s3-alpha-sig.figma.com/img/98d3/62d7/79aa8cfa5d45ac5b93f9bbaad0652040?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QkyJvQtvUaHN0O2R8dJclkZXJ4b4~nBDebmfT1Ecw-ZCusMj8F~mYHoolMGWBnXzhElDEt~38PGI9M1h3kCXEapjDpO1yXIigwjRZ0lNxXJPprfTozd8jB1aXWIOfsDzsE29k2uW~FjEYoQprJAT-wW2CFZTamjG1vt4SoFKN0XF6yeeXoAKxIc4pIqZPbc7k7we3wQQn7NPFUH-Qej91ZSKstyPoAtKUiscMPAOjuIWQC1nr0B3oiFgTFF3lG0Xf-n58NGtj3LOV9z8zkowIkpW1NmzPIAjC5VrZgaP4FiOBfiv0HPlcPIEZ3DeAeIhCuemWuVURTtTNjrmk04-iQ__"
              bgColor="red-300"
              height="250px" 
            />
          </div>
          </div>
        </div>
      </div>
      {/* Wave Background */}
      <WaveSVG style={{ position: 'absolute', bottom: 0, left: 0, right: 0, }} className="-mt-80" />
    </div>
  );
};

export default CardData2;

