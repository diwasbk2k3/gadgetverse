import React from 'react'
import ShopCard from './ShopCard'
import Footer from './Footer'

function Shop() {
  return (
    <>
    <div className= 'bg-gradient-to-r from-blue-400 via-red-300 to-blue-400 min-h-screen'>
    {/* Search Bar */}
    <div className="w-full flex flex-col sm:flex-row justify-center px-4 py-5 gap-2">
      <input
      type="text"
      placeholder="Search gadgets here"
      className="flex-grow px-4 py-2 rounded-lg sm:rounded-l-lg bg-white text-black outline-none w-full sm:w-auto"
      />
      <button className="p-2 bg-slate-900 text-white rounded-lg sm:rounded-r-lg hover:bg-gray-800 w-full sm:w-auto hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
        Search
      </button>
    </div>

    <div className="flex flex-wrap md:gap-0 md:px-0 px-4 gap-2">
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
    </div>
    
    <div className="bg-gradient-to-r from-blue-400 via-red-300 to-blue-400 mt-8">
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default Shop