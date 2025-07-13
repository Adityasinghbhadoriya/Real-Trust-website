import React from 'react';
import hero1 from '../assets/Ellipse 11.svg';
import hero2 from '../assets/Ellipse 12.svg';
import hero3 from '../assets/Ellipse 13.svg';
import largeCircle from '../assets/Ellipse 1.svg';
import leftSemiCircle from '../assets/Ellipse 8.svg';
import rightSemiCircle from '../assets/Ellipse 7.svg';
import smallCircle from '../assets/Ellipse 19.svg';
import bigBlueCircle from '../assets/Ellipse 24.svg';
import smallBlueCircle from '../assets/Ellipse 26.svg';
import smallOrangeCircle from '../assets/Ellipse 25-1.svg';
import groupOfSmallCircles from '../assets/Group 1.svg';
import home from '../assets/home.svg';
import dollar from '../assets/circle-dollar-sign.svg';
import paintBrush from '../assets/paintbrush-2.svg';
import arrow from '../assets/Subtract-1.svg';

const Services = () => {
  return (
    <div id='services' className="relative px-6 md:px-16 py-20 bg-white overflow-hidden">

      {/* Decorative Backgrounds */}
      <img src={largeCircle} className="absolute top-0 right-0 w-[600px] " alt="" />
      <img src={leftSemiCircle} className="absolute top-[35%] left-0 w-52" alt="" />
      <img src={rightSemiCircle} className="absolute top-0 right-0 w-[700px]  -rotate-[87deg] -translate-y-[66px]" alt="" />
      <img src={smallCircle} className="absolute top-[5%] left-[5%] w-15 " alt="" />
      <img src={bigBlueCircle} className="absolute top-10 left-[51%] w-16" alt="" />
      <img src={smallBlueCircle} className="absolute top-[59%] left-[80%] w-5" alt="" />
      <img src={smallOrangeCircle} className="absolute top-[44%] left-[54%] w-8" alt="" />
      <img src={groupOfSmallCircles} className="absolute bottom-[42%] left-[8%] w-50" alt="" />

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className='ml-10'>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">Not Your Average Realtor</h2>
          <p className="text-gray-600 max-w-md text-xl">
            Real Trust is an agency focused on giving property investors excellent consulting, design, and effective marketing to get the most return on value in this market.
          </p>
        </div>
        <div className="relative flex justify-center items-center gap-6">
          <img src={hero1} alt="hero1" className="w-96 h-96 rounded-full border-4 border-white shadow-md z-20 mr-[200px] mt-10" />
          <div className="absolute top-0 right-0 flex flex-col gap-6 ">
            <img src={hero2} alt="hero2" className="w-64 h-64 rounded-full border-4 border-white shadow-sm ml-5" />
            <img src={hero3} alt="hero3" className="w-64 h-64 rounded-full border-4 border-white shadow-sm" />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="pt-72 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">Why Choose Us?</h3>
        <div className="h-2 w-30 bg-blue-500 mx-auto mb-10 "></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center pt-7">
          {/* ROI */}
          <div className="flex flex-col items-center gap-4 px-4 ">
            <img src={home} alt="home" className="w-10" />
            <h4 className="font-semibold text-blue-500 text-lg">Potential ROI</h4>
            <p className="text-gray-600 text-sm">
              Whether you are looking to buy a development or renovate your current home for ROI, we will walk you through potential returns for success.
            </p>
          </div>

          {/* Design */}
          <div className="flex flex-col items-center gap-4 px-4">
            <img src={paintBrush} alt="design" className="w-10" />
            <h4 className="font-semibold text-blue-500 text-lg">Design</h4>
            <p className="text-gray-600 text-sm">
              Our in-house, well-trained design team guides through proper design options and asset boosting confidence to streamline the home upgrade.
            </p>
          </div>

          {/* Marketing */}
          <div className="flex flex-col items-center gap-4 px-4">
            <img src={dollar} alt="marketing" className="w-10" />
            <h4 className="font-semibold text-blue-600 text-lg">Marketing</h4>
            <p className="text-gray-600 text-sm">
              Bringing your product to market with proper plans and a sophisticated digital marketing plan to accompany every listing to match today’s buyers.
            </p>
          </div>
        </div>

        {/* Arrow at Bottom Right */}
        <div className='pt-10'>
        <img src={arrow} alt="arrow" className="absolute bottom-10 right-20 w-5 " />
        </div>
      </div>
    </div>
  );
};

export default Services;
