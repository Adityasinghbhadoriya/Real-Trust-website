import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../../utils/utils';

const Contact = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/user/contact`, {
        fullName,
        email,
        number,
        city
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log("Thank you! We'll get back to you shortly.", response.data);
      toast.success(response.data.message || "Thank you! We'll get back to you shortly.");
      setFullName("")
      setEmail("")
      setNumber("")
      setCity("")
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='flex h-screen'>
      {/* LEFT FORM SECTION */}
      <div className='w-1/2 flex items-center justify-center bg-[#4B5B8A]'>
        <div className='w-[90%] max-w-md p-10 rounded-lg shadow-xl border border-gray-300'>

          <h1 className='font-bold text-4xl text-center text-white'>Get a Free <br /> <span className='text-orange-400'>Consultation</span></h1>
          <form onSubmit={handleSubmit} className='pt-5'>
            <div className="form-group">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className='w-full px-4 py-3 mt-6 border bg-[#4B5B8A] border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-white'
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className='w-full px-4 py-3 mt-6 border bg-[#4B5B8A] border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-white'
              />
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Mobile Number"
                className='w-full px-4 py-3 mt-6 border bg-[#4B5B8A] border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-white'
              />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Area, City"
                className='w-full px-4 py-3 mt-6 border bg-[#4B5B8A] border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-white'
              />
            </div>
            <div className='pt-6 flex justify-center'>
              <button className='py-3 w-full bg-orange-500 rounded-xl text-white cursor-pointer hover:scale-105 duration-300 hover:bg-orange-400'>
                Get Quick Quote
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT TEXT SECTION */}
      <div className='w-1/2 flex items-center justify-center p-12 bg-white'>
        <div className='max-w-md'>
          <h2 className='text-3xl font-bold text-[#4B5B8A] mb-4'>Why Choose Us?</h2>
          <p className='text-gray-600 text-lg leading-relaxed mb-6'>
            Our expert consultants are here to guide you every step of the way. Whether you’re launching a new project or improving an existing one, we tailor solutions that meet your exact needs.
          </p>
          <ul className='  text-gray-700 space-y-2'>
            <li>✔ Personalized support</li>
            <li>✔ Fast response time</li>
            <li>✔ Expert guidance</li>
            <li>✔ Proven track record</li>
          </ul>
          <Link to="/" className="text-black text-sm underline hover:text-orange-700 mt-10 block">
            ← Go Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Contact;
