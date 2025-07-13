import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import dashBoardImage from '../assets/dashboard.png'
import { BACKEND_URL } from '../../utils/utils';
// import { BACKEND_URL } from '../../utils/utils';

function AdminDashboard() {
      const handleLogout = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/admin/logout`, {
      withCredentials: true,
    });

    toast.success(response.data.message);

    // Clear localStorage and update state
    localStorage.removeItem("admin");

  } catch (error) {
    console.log("Error in logging out", error);
    toast.success(
      "Logged out successfully"
    );
    localStorage.removeItem("admin");
    
  }
};

  return (
     <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-5 ">
        <div className="flex gap-2 items-center justify-center mb-10">
          <img src={dashBoardImage} alt="Profile" className="mt-5 h-7 w-7" />
          <h2 className="text-lg font-semibold mt-4 text-white">Dashboard</h2>
        </div>
        <nav className="flex flex-col space-y-4 ">
          <Link to="/admin/projects">
            <button className="w-full  text-white py-2 rounded cursor-pointer hover:bg-blue-500 ">
              Our Projects
            </button>
          </Link>
          <Link to="/admin/create-project">
            <button className="w-full  text-white py-2 rounded cursor-pointer hover:bg-blue-500">
              Create Project
            </button>
          </Link>
          <Link to="/admin/contacts">
            <button className="w-full  text-white py-2 rounded cursor-pointer hover:bg-blue-500">
              All contacts
            </button>
          </Link>
          <Link to="/admin/clients">
            <button className="w-full  text-white py-2 rounded cursor-pointer hover:bg-blue-500">
              All Clients
            </button>
          </Link>
          <Link to="/admin/create-client">
            <button className="w-full  text-white py-2 rounded cursor-pointer hover:bg-blue-500">
              Create Client
            </button>
          </Link>
          <Link to="/admin/subscriptions">
            <button className="w-full  text-white py-2 rounded cursor-pointer hover:bg-blue-500">
              All Subscriptions
            </button>
          </Link>
          <Link to="/">
            <button className="w-full  text-white py-2 rounded cursor-pointer hover:bg-blue-500">
              Home
            </button>
          </Link>
          <Link to="/admin/login">
            <button
              onClick={handleLogout}
              className="w-full text-white py-2 rounded cursor-pointer hover:bg-blue-500"
            >
              Logout
            </button>
          </Link>
        </nav>
      </div>
      <div className="flex h-screen items-center justify-center ml-[40%] text-4xl">
        Welcome!!!
      </div>
    </div>
  )
}

export default AdminDashboard