import React from 'react';
import heroImage from '../assets/young_couple.svg';

const Hero = () => {
  return (
    <div id='' className="relative w-full">
      {/* Image */}
      <img src={heroImage} alt="hero" className="w-full h-auto object-cover" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center ml-25 mt-25">
        <h1 className="text-3xl md:text-7xl font-bold text-white  bg-opacity-40 px-6 py-4 rounded-md">
          Consultation,<br /> Design <br /> & Marketing
        </h1>
      </div>
    </div>
  );
};

export default Hero;
