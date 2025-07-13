import React from 'react'
import image1 from '../assets/pexels-andres-ayrton-6578391.svg'
import image2 from '../assets/pexels-brett-sayles-2881232.svg'
import image3 from '../assets/pexels-fauxels-3182834.svg'
import smallOrangeArrow from '../assets/Subtract-5.svg'
import bigOrangeArrow from '../assets/Subtract-4.svg'
import sqaure from '../assets/Rectangle 57.svg'
import blueArrow from '../assets/Subtract.svg'
import fadedArrow1 from '../assets/Subtract-2.svg'
import fadedArrow2 from '../assets/Subtract-3.svg'
import blueRactangle from '../assets/Rectangle 54.svg'
import fadedSmallRectangle from '../assets/Rectangle 55.svg'
import darkBlueLine from '../assets/Rectangle 58.svg'
import leftSemiCircle from '../assets/Ellipse 22.svg'
import rightSemiCircle from '../assets/Ellipse 18.svg'
import aboveRightSemiCircleCircle from '../assets/Ellipse 17.svg'
import aboveLeftSemiCircleCircle from '../assets/Ellipse 21.svg'
import verySmallCircle from '../assets/Ellipse 20.svg'
import multipleSmallCirclesGroup from '../assets/Group 1000001645.svg'

const Aboutus = () => {
    return (
        <div className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">

            {/* Background Decorations */}
            <img src={aboveLeftSemiCircleCircle} className="absolute top-[25%] left-[5%] w-44" alt="" />
            <img src={leftSemiCircle} className="absolute mt-50 left-0  w-52" alt="" />
            <img src={aboveRightSemiCircleCircle} className="absolute top-[10%] right-[5%] w-48 " alt="" />
            <img src={rightSemiCircle} className="absolute top-[20%] right-0  w-60" alt="" />
            <img src={verySmallCircle} className="absolute bottom-[35%] right-[18%] w-15 " alt="" />
            <img src={verySmallCircle} className="absolute top-[15%] left-[10%] w-15 " alt="" />
            <img src={fadedArrow1} className="absolute -top-[1%] left-[20%]  w-15" alt="" />
            <img src={fadedArrow2} className="absolute -bottom-10 left-[3%] w-20 " alt="" />
            <img src={fadedArrow2} className="absolute bottom-[15%] right-[3%] w-20 " alt="" />
            <img src={multipleSmallCirclesGroup} className="absolute -top-[0.5%] right-[8%] w-50" alt="" />
            <img src={fadedSmallRectangle} className="absolute top-[42%] left-[27%] w-15" alt="" />

            {/* Image Grid */}
            <div className="flex justify-center items-start gap-10 relative z-10">
                <div className="relative">
                    <img src={blueRactangle} className="absolute -top-3 left-50 w-12 z-0" alt="" />
                    <img src={bigOrangeArrow} className="absolute top-40  -left-4   w-12 z-0" alt="" />
                    <img src={image2} alt="image2" className="w-48 h-48 object-cover z-10 relative shadow-lg" />
                </div>

                <div className="relative mt-25"> {/* Only this one is offset */}
                    <img src={image1} alt="image1" className="w-72 h-64 object-cover shadow-md" />
                    <img src={blueArrow} className="absolute -top-15  left-70 w-15" alt="" />
                    <img src={sqaure} className="absolute top-30 -left-12 w-50" alt="" />
                </div>

                <div className="relative mt-40">
                    <img src={image3} alt="image3" className="w-48 h-48 object-cover shadow-md" />
                    <img src={smallOrangeArrow} className="absolute top-45   left-45 w-5" alt="" />   
                    
                </div>
            </div>


            {/* About Section */}
            <div className="text-center mt-20">
                <h2 className="text-blue-600 font-bold text-3xl mb-4">About Us</h2>
                <img src={darkBlueLine} className="mx-auto mb-6 w-32" alt="" />
                <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
                    Fifteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through. We provide quality service to build relationships with clients and, more importantly, maintain those relationships by communicating effectively.
                </p>
                <button className="mt-6 px-15 py-2 border-b border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition cursor-pointer">
                    LEARN MORE
                </button>
            </div>

        </div>
    )
}

export default Aboutus
