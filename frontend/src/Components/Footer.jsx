import React, { useState } from 'react';
import image from '../assets/Rectangle.svg';
import linkedinIcon from '../assets/Linkedin.svg';
import facebookIcon from '../assets/Frame.svg';
import twitterIcon from '../assets/Group-1.svg';
import instagramIcon from '../assets/Group.svg';
import logo from '../assets/logo.svg'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../utils/utils';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/subscriptions/subscribe`, {
                email
            }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                }
            })
            console.log("Subscribed Successfully", response.data);
            toast.success(response.data.message || "Subscribed successfully");

            setEmail("")
        } catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
            setEmail("")
        }
    }

    return (
        <div className="mt-20">

            <div className="relative w-full h-[400px]">
                <img
                    src={image}
                    alt="Footer Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
                    <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6 max-w-2xl">
                        Learn more about our listing process, as well as our additional staging and design work.
                    </h2>
                    <button className="bg-white text-black px-6 py-2 rounded shadow font-semibold hover:bg-gray-100 cursor-pointer">
                        LEARN MORE
                    </button>
                </div>
            </div>

            {/* Middle Navigation + Subscribe Section */}
            <div className="bg-[#1e73e8] py-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Navigation Links */}
                <div className="flex flex-wrap gap-6 justify-center text-white text-sm font-medium">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#services" className="hover:underline">Services</a>
                    <a href="#projects" className="hover:underline">Projects</a>
                    <a href="#testimonials" className="hover:underline">Testimonials</a>
                    <Link to={'/contact'} className="hover:underline">Contact</Link>
                </div>

                {/* Subscribe */}
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <span className="text-white text-sm font-medium">Subscribe to:</span>
                    <form onSubmit={handleSubmit} className="flex items-center border border-white rounded overflow-hidden">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email Address"
                            className="px-3 py-2 text-sm text-white outline-none w-72 placeholder-white"
                        />
                        <button type='submit' className="bg-white text-[#1e73e8] px-6 py-2 text-sm font-semibold hover:bg-gray-100 cursor-pointer">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#1a1a1a] text-white py-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-2 md:mb-0">© All Rights Reserved 2025</p>
                <img src={logo} alt="" className='' />
                <div className="flex gap-4">
                    <img src={twitterIcon} alt="Twitter" className="w-7 h-7 bg-white rounded-full p-1 cursor-pointer" />
                    <img src={facebookIcon} alt="Facebook" className="w-7 h-7 bg-white rounded-full p-1 cursor-pointer" />
                    <img src={instagramIcon} alt="Instagram" className="w-7 h-7 bg-white rounded-full p-1 cursor-pointer" />
                    <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 bg-white rounded-full p-1 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
