import React from 'react';

function BestSellingGadgets() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 via-pink-400 to-pink-400 flex flex-col items-center">
        <h1 className="text-3xl text-white font-bold mt-10">Best Selling Gadgets</h1>
        <div className="bg-gradient-to-r from-blue-800 via-white to-pink-600 w-[250px] h-[10px] flex justify-center items-center rounded-lg m-5"></div>
      </div>
      <div className="bg-gradient-to-r from-blue-400 via-pink-400 to-pink-400 w-full h-full flex flex-wrap px-4 py-5 justify-between">
        {/* Card 1 - iPhone */}
        <div className="bg-white text-black rounded-lg p-4 w-full md:w-[200px] h-[275px] md:h-[275px] sm:w-[300px] m-3">
          <img
            src="https://thedailynavigator.com/wp-content/uploads/2022/11/7-2-1024x672.png"
            alt="iPhone"
            className="w-full h-[180px] object-cover rounded"
          />
          <h2 className="mt-4 text-lg font-semibold text-center">iPhone</h2>
          <a href="#" className="text-sm text-right text-gray-500 hover:text-blue-500">
            See More
          </a>
        </div>

        {/* Card 2 - MacBook */}
        <div className="bg-white text-black rounded-lg p-4 w-full md:w-[200px] h-[275px] md:h-[275px] m-3">
          <img
            src="https://images.macrumors.com/t/37N5JFyNAWtFehrbFNALkrVqSo8=/400x400/smart/article-new/2021/10/14-16-inch-2021-mbps-back-to-back-feature.jpg"
            alt="MacBook"
            className="w-full h-[180px] object-cover rounded"
          />
          <h2 className="mt-4 text-lg font-semibold text-center">MacBook</h2>
          <a href="#" className="text-sm text-right text-gray-500 hover:text-blue-500">
            See More
          </a>
        </div>

        {/* Card 3 - Smartwatches */}
        <div className="bg-white text-black rounded-lg p-4 w-full md:w-[200px] h-[275px] md:h-[275px] m-3">
          <img
            src="https://cdn.hiptoro.com/wp-content/uploads/2019/04/Apple-Smart-Watch-Series-5.jpg"
            alt="Smartwatches"
            className="w-full h-[180px] object-cover rounded"
          />
          <h2 className="mt-4 text-lg font-semibold text-center">Smartwatches</h2>
          <a href="#" className="text-sm text-right text-gray-500 hover:text-blue-500">
            See More
          </a>
        </div>

        {/* Card 4 - Drones */}
        <div className="bg-white text-black rounded-lg p-4 w-full md:w-[200px] h-[275px] md:h-[275px] m-3">
          <img
            src="https://images.inkl.com/s3/article/lead_image/19290099/T9ECpvFB22Up4SzhMyuYiV.jpg"
            alt="Drones"
            className="w-full h-[180px] object-cover rounded"
          />
          <h2 className="mt-4 text-lg font-semibold text-center">Drones</h2>
          <a href="#" className="text-sm text-right text-gray-500 hover:text-blue-500">
            See More
          </a>
        </div>

        {/* Card 5 - Camera */}
        <div className="bg-white text-black rounded-lg p-4 w-full md:w-[200px] h-[275px] md:h-[275px] m-3">
          <img
            src="https://www.hitechreview.com/gallery/sony-a230a330a380-dslr-cameras/sony-dslr-camera-02.jpg"
            alt="Camera"
            className="w-full h-[180px] object-cover rounded"
          />
          <h2 className="mt-4 text-lg font-semibold text-center">Camera</h2>
          <a href="#" className="text-sm text-right text-gray-500 hover:text-blue-500">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default BestSellingGadgets;
