import React from 'react';

function BestSellingGadgets() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 via-teal-500 to-pink-400 flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl text-white font-bold">Best Selling Gadgets</h1>
        <div className="bg-gradient-to-r via-white w-[300px] sm:w-[550px] h-[10px] flex justify-center items-center rounded-lg mt-5"></div>
      </div>
      
      <div className="bg-gray-50 flex flex-wrap justify-center gap-10 px-4 py-8">
        {/* Gadget 1 - iPhone */}
        <div className="flex flex-col items-center w-full sm:w-[220px]">
          <img
            src="https://thedailynavigator.com/wp-content/uploads/2022/11/7-2-1024x672.png"
            alt="iPhone"
            className="w-full h-[250px] object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">iPhone</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-blue-500 mt-2">See More</a>
        </div>

        {/* Gadget 2 - MacBook */}
        <div className="flex flex-col items-center w-full sm:w-[220px]">
          <img
            src="https://images.macrumors.com/t/37N5JFyNAWtFehrbFNALkrVqSo8=/400x400/smart/article-new/2021/10/14-16-inch-2021-mbps-back-to-back-feature.jpg"
            alt="MacBook"
            className="w-full h-[250px] object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">MacBook</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-blue-500 mt-2">See More</a>
        </div>

        {/* Gadget 3 - Smartwatches */}
        <div className="flex flex-col items-center w-full sm:w-[220px]">
          <img
            src="https://cdn.hiptoro.com/wp-content/uploads/2019/04/Apple-Smart-Watch-Series-5.jpg"
            alt="Smartwatches"
            className="w-full h-[250px] object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">Smartwatches</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-blue-500 mt-2">See More</a>
        </div>

        {/* Gadget 4 - Drones */}
        <div className="flex flex-col items-center w-full sm:w-[220px]">
          <img
            src="https://images.inkl.com/s3/article/lead_image/19290099/T9ECpvFB22Up4SzhMyuYiV.jpg"
            alt="Drones"
            className="w-full h-[250px] object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">Drones</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-blue-500 mt-2">See More</a>
        </div>

        {/* Gadget 5 - Camera */}
        <div className="flex flex-col items-center w-full sm:w-[220px]">
          <img
            src="https://www.hitechreview.com/gallery/sony-a230a330a380-dslr-cameras/sony-dslr-camera-02.jpg"
            alt="Camera"
            className="w-full h-[250px] object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">Camera</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-blue-500 mt-2">See More</a>
        </div>

        {/* Gadget 6 - Gaming Accessories */}
        <div className="flex flex-col items-center w-full sm:w-[220px]">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51sWfn4K79L._SL500_._AC_SL500_.jpg"
            alt="Gaming Accessories"
            className="w-full h-[250px] object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">Gaming Accessories</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-blue-500 mt-2">See More</a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-400 via-teal-500 to-pink-400 flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl text-white font-bold italic">Revolutionizing the way you experience technology!</h1>
        <div className="bg-gradient-to-r via-white w-[300px] sm:w-[550px] h-[10px] flex justify-center items-center rounded-lg mt-5"></div>
      </div>
    </div>
  );
}

export default BestSellingGadgets;
