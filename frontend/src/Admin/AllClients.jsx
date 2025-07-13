import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../Utils/utils';

const AllClients = () => {

    const [allClients, setAllClients] = useState([]);

    const fetchClients = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/client/all-clients`, {
        withCredentials: true
      });
      setAllClients(response.data.client);
    } catch (error) {
      console.log("Error in fetching clients", error);
    }
  };

  useEffect(()=>{
    fetchClients();
  },[])
  return (
    <div>
        <div className="py-10 px-4 md:px-16 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600">Happy Clients</h2>
           <Link
          to="/admin/dashboard"
          className="bg-orange-400 py-2 px-4 rounded-lg text-white hover:bg-orange-950 duration-300"
        >
          Back to Dashboard
        </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {allClients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 h-72 cursor-pointer">
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
  )
}

export default AllClients