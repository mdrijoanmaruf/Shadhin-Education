import React from 'react';

const Header = () => {
  return (
    <div className='shadow-md'>
      <div className='max-w-[1200px] mx-4 md:mx-auto h-[80px] flex flex-col justify-center'>
        <p className='font-bold text-2xl md:text-3xl text-gray-600'>
          Shadhin Education
        </p>
        <p className='text-gray-500 text-sm md:text-base'>
          An Educational and Health Org. platform
        </p>
      </div>
    </div>
  );
};

export default Header;
