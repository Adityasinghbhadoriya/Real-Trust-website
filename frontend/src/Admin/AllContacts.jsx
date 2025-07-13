import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../Utils/utils.js';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllContacts = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/user/all-contacts`, {
        withCredentials: true,
      });
      setAllContacts(response.data.contact);
    } catch (error) {
      console.log('Error in fetching contacts', error);
      toast.error("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading contacts...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">All Contact Requests</h1>
        <Link
          to="/admin/dashboard"
          className="bg-orange-400 py-2 px-4 rounded-lg text-white hover:bg-orange-950 duration-300"
        >
          Back to Dashboard
        </Link>
      </div>

      {allContacts.length === 0 ? (
        <p className="text-center text-gray-500">No contact requests found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allContacts.map((contact) => (
            <div key={contact._id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{contact.fullName}</h2>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Email:</span> {contact.email}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Phone:</span> {contact.number}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">City:</span> {contact.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllContacts;
