import React from 'react';
import Footer from './Footer';
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 via-purple-600 to-pink-400 text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mt-8 sm:text-4xl">About Us</h1>
          <p className="text-base p-6 text-center sm:text-lg sm:px-12 lg:px-32">
            Welcome to Gadgetverse, your ultimate destination for cutting-edge
            technology and the latest gadgets. Our mission is to provide you with
            the best gadgets at unbeatable prices, catering to all your tech
            needs.
          </p>
        </div>
      </div>
      <div className="bg-white text-white flex flex-col items-center">
        <div className="flex justify-center mt-8">
          <motion.img
            className="h-[125px] sm:h-[150px]"
            src="satisfaction.png"
            alt="Satisfaction Guaranteed"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <h1 className="text-gray-900 text-3xl font-bold mt-2 sm:text-4xl">Our Services</h1>
        <div className="bg-gradient-to-r from-blue-800 via-white to-pink-600 w-[250px] h-[10px] flex justify-center items-center rounded-lg m-5"></div>
      </div>
      <div className="w-full h-full flex flex-wrap px-4 py-5 justify-center gap-5 md:justify-evenly md:mb-5">
        {/* Service 1 - Gadget Sales */}
        <div className="bg-gradient-to-r from-gray-500 via-pink-500 to-gray-500 text-white rounded-lg p-4 w-[90%] sm:w-[300px] lg:w-[200px] h-[255px] transition-all duration-300 ease-in-out hover:scale-105">
          <h2 className="bg-gradient-to-r from-pink-400 to-gray-600 mt-4 text-lg font-semibold text-center rounded-sm">
            Gadget Sales
          </h2>
          <img
            src="gadget_sales.jpg"
            alt="Gadget Sales"
            className="w-full h-[170px] object-cover rounded-lg mt-2"
          />
        </div>

        {/* Service 2 - Expert Support */}
        <div className="bg-gradient-to-r from-gray-500 via-pink-500 to-gray-500 text-white rounded-lg p-4 w-[90%] sm:w-[300px] lg:w-[200px] h-[255px] transition-all duration-300 ease-in-out hover:scale-105">
          <h2 className="bg-gradient-to-r from-pink-400 to-gray-600 mt-4 text-lg font-semibold text-center rounded-sm">
            Expert Support
          </h2>
          <img
            src="expert_support.jpg"
            alt="Expert Support"
            className="w-full h-[170px] object-cover rounded-lg mt-2"
          />
        </div>

        {/* Service 3 - Free Delivery */}
        <div className="bg-gradient-to-r from-gray-500 via-pink-500 to-gray-500 text-white rounded-lg p-4 w-[90%] sm:w-[300px] lg:w-[200px] h-[255px] transition-all duration-300 ease-in-out hover:scale-105">
          <h2 className="bg-gradient-to-r from-pink-400 to-gray-600 mt-4 text-lg font-semibold text-center rounded-sm">
            Free Delivery
          </h2>
          <img
            src="free_delivery.jpg"
            alt="Free Delivery"
            className="w-full h-[170px] object-cover rounded-lg mt-2"
          />
        </div>

        {/* Service 4 - Warranty Services */}
        <div className="bg-gradient-to-r from-gray-500 via-pink-500 to-gray-500 text-white rounded-lg p-4 w-[90%] sm:w-[300px] lg:w-[200px] h-[255px] transition-all duration-300 ease-in-out hover:scale-105">
          <h2 className="bg-gradient-to-r from-pink-400 to-gray-600 mt-4 text-lg font-semibold text-center rounded-sm">
            Warranty Services
          </h2>
          <img
            src="warranty_service.png"
            alt="Warranty Services"
            className="w-full h-[170px] object-cover rounded-lg mt-2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
