import React from 'react';

const CardGrid = ({ cards }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-screen-lg">
        {cards.map((id, index) => (
          <div
            key={index}
            className={`bg-${id.backgroundColor}-200 text-white p-4 flex flex-col justify-start items-start`}
            style={{
              borderTopLeftRadius: index === 0 ? '0.5rem' : '0',
              borderBottomLeftRadius: index === 0 ? '0.5rem' : '0',
              borderTopRightRadius: index === cards.length - 1 ? '0.5rem' : '0',
              borderBottomRightRadius: index === cards.length - 1 ? '0.5rem' : '0',
              borderRight: index < cards.length - 1 ? '' : 'none',
            }}
          >
            <div className=" w-30 h-full mb-10 bg-yellow-300 rounded-full overflow-hidden">
              <img
                src={id.imageUrl}
                alt=""
                className=" "
              />
            </div>
            <h2 className="text-xl text-black font-bold mb-2">{id.title}</h2>
            <p className='mb-20 text-black size-full'>{id.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
