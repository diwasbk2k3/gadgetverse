import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    // Main Container
    <div className="h-auto md:h-[400px] bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400 flex flex-col md:flex-row items-center px-4">
      {/* Left Container */}
      <div className="w-full md:w-[60%] flex flex-col items-start mb-8 md:mb-0">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl md:mt-1 font-bold text-white mb-6 md:mb-14 mt-8">
          Buy your <span className="text-[#142441]"><i>Favorite Gadgets</i></span>
          <br />
          <span className="text-[#142441]"><i>for the</i></span> best prices
        </h1>

        {/* Search Bar */}
        <div className="flex w-full md:w-[600px] mb-6 md:mb-14">
          <input
            type="text"
            placeholder="Search gadgets here"
            className="flex-grow px-5 py-2 rounded-l-lg text-black outline-none bg-white"
          />
          <button className="px-4 md:px-6 bg-black text-white rounded-r-lg hover:bg-gray-800 hover:cursor-pointer">
            Search
          </button>
        </div>

        {/* Subheading */}
        <p className="text-white text-lg mb-2">
          From affordable finds to premium picks, we’ve got something for
          everyone.
        </p>
        <p className="text-[#142441] text-lg font-bold italic">
          Your Gateway to Next-Gen Gadgets!
        </p>
      </div>

      {/* Right Container */}
      <div className="w-full h-[100px] md:w-[40%] flex items-center justify-center md:m-5 mb-8">
        <motion.img
          src="gadgetverse_img.png"
          alt="Gadget Collection"
          className="md:h-[600px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
