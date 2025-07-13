import React, { useEffect, useState } from 'react';
import axios from 'axios';
import leftSmallSemiCircle from '../assets/Ellipse 23.svg'
import leftBigSemiCircle from '../assets/Ellipse 7-1.svg'
import groupOfCircles from '../assets/Group 1.svg'
import rightFullCircle from '../assets/Ellipse 21.svg'
import blueCircle from '../assets/Ellipse 26.svg'
import orangeCircle from '../assets/Ellipse 25-1.svg'
import { BACKEND_URL } from '../../utils/utils';


const MainContent = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [allClients, setAllClients] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/project/get-projects`, {
        withCredentials: true
      });
      setAllProjects(response.data.projects.slice(0,5));
    } catch (error) {
      console.log("Error in fetching projects", error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/client/all-clients`, {
        withCredentials: true
      });
      setAllClients(response.data.client.slice(0,5));
    } catch (error) {
      console.log("Error in fetching clients", error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchClients();
  }, []);

  return (
    <div className='relative'>
       {/* Decorative Backgrounds */}
            <img src={blueCircle} className="absolute bottom-[38%] left-[5%]  " alt="" />
            <img src={orangeCircle} className="absolute top-[42.5%] left-[18%] " alt="" />
            <img src={rightFullCircle} className="absolute top-[47%] right-0  " alt="" />
            <img src={leftBigSemiCircle} className="absolute top-[25%]  w-72  " alt="" />
            <img src={leftSmallSemiCircle} className="absolute bottom-10  " alt="" />
            <img src={groupOfCircles} className="absolute top-[45%] right-0 rotate-90 w-56" alt="" />
      {/* Our Projects Section */}
      <div id='projects' className="py-20 px-4 md:px-16 bg-[#f5faff]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {allProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image.url}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-600 font-semibold">{project.description}</h3>
                <p className="text-sm text-gray-500 mt-2">{project.name}</p>
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm cursor-pointer">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Happy Clients Section */}
      <div id='testimonials' className="py-50 px-4 md:px-16 bg-white ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600">Happy Clients</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {allClients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 h-72 cursor-pointer z-20">
              <img
                src={client.image.url}
                alt={client.name}
                className="w-12 h-12 rounded-full mx-auto mb-7 object-cover"
              />
              <p className="text-gray-600 text-sm mb-6">
                {client.description.length > 120
                  ? client.description.substring(0, 120) + '...'
                  : client.description}
              </p>
              <h4 className="font-semibold text-blue-600">{client.name}</h4>
              <p className="text-sm text-gray-500 mt-2">{client.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
