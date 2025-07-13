import React from 'react';
import logo from '../assets/logo.svg'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='home' className='shadow-md bg-white'>
    <nav className="flex justify-between items-center px-8 py-4  max-w-7xl mx-auto">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8" />
      </div>
      {/* Center: Links */}
      <div className="hidden md:flex gap-10 text-sm font-medium text-gray-600">
        <div className='flex mt-2 gap-20 text-sm font-medium text-gray-600'>
        <a href="#home" className="hover:text-blue-500">HOME</a>
        <a href="#services" className="hover:text-blue-500">SERVICES</a>
        <a href="#projects" className="hover:text-blue-500">ABOUT PROJECTS</a>
        <a href="#testimonials" className="hover:text-blue-500">TESTIMONIALS</a>
        </div>
        <Link to={"/contact"}  className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-300 cursor-pointer">
          CONTACT
        </Link>
        <Link to={"/admin/signup"}  className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-300 cursor-pointer">
          ADMIN
        </Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
