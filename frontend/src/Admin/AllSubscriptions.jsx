import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../../Utils/utils';

const AllSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubscriptions = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/subscriptions/all-subscriptions`,
        { withCredentials: true }
      );
      console.log("Fetched Subscriptions:", response.data);
      setSubscriptions(response.data?.subscriptions || []);
    } catch (error) {
      console.log("Error in fetching subscriptions", error);
      toast.error("Failed to load subscriptions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading subscriptions...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">All Subscribed Emails</h1>
        <Link
          to="/admin/dashboard"
          className="bg-orange-400 py-2 px-4 rounded-lg text-white hover:bg-orange-950 duration-300"
        >
          Back to Dashboard
        </Link>
      </div>

      {subscriptions.length === 0 ? (
        <p className="text-center text-gray-500">No subscriptions yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptions.map((sub, index) => (
            <div
              key={sub._id || index}
              className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between"
            >
              <span className="text-lg font-medium text-gray-800">
                📧 {sub.email}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSubscriptions;
