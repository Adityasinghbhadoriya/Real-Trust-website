import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../../utils/utils';

function AdminSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/admin/signup`, {
        firstName,
        lastName,
        email,
        password
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success(response.data.message || "Signup successful");
      navigate("/admin/login");

    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Signup Failed");
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center px-4">
           <Link
                className="bg-orange-400 py-2 px-4 rounded-lg text-white hover:bg-orange-950 duration-300 absolute top-10 left-10 "
                to={"/"}
              >
                Back to Home
            </Link>
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-center ">
          Welcome to <Link to="/" className="text-blue-500 hover:underline">Real Trust</Link>
        </h1>
        <p className="text-center text-gray-600 mt-2">Just sign up to join us!</p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#F0EADC] focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#F0EADC] focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#F0EADC] focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#F0EADC] focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
          />

          {errorMessage && (
            <div className="text-red-500 text-center mt-2 text-sm">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#1e73e8] text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 cursor-pointer    "
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link to="/admin/login" className="text-[#1e73e8] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminSignup;
