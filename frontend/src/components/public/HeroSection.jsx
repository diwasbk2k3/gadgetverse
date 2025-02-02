import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    // Main Container
    <div className="h-auto md:h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 flex flex-col md:flex-row items-center px-4">
      {/* Left Container */}
      <div className="w-full md:w-[60%] flex flex-col items-start mb-8 md:mb-0">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl md:mt-1 font-bold text-white mb-6 md:mb-14 mt-8">
          Buy your favorite gadgets
          <br />
          for the best prices
        </h1>

        {/* Search Bar */}
        <div className="flex w-full md:w-[500px] mb-6 md:mb-14">
          <input
            type="text"
            placeholder="Search gadgets here"
            className="flex-grow px-4 py-2 rounded-l-lg text-black outline-none bg-white"
          />
          <button className="px-4 md:px-6 bg-black text-white rounded-r-lg hover:bg-gray-800 hover:cursor-pointer">
            Search
          </button>
        </div>

        {/* Subheading */}
        <p className="text-white text-sm mb-2">
          From affordable finds to premium picks, we’ve got something for
          everyone.
        </p>
        <p className="text-white text-lg font-bold">
          Your Gateway to Next-Gen Gadgets!
        </p>
      </div>

      {/* Right Container */}
      <div className="w-full md:w-[40%] flex items-center justify-center m-5">
        <motion.img
          src="gadgetverse_img.png"
          alt="Gadget Collection"
          className="max-w-full h-[350px] md:max-h-[400px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
