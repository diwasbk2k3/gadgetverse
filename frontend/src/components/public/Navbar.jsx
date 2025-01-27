import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="w-full h-20 text-white bg-[#142441] flex items-center justify-between px-4">
        <div className="text-2xl sm:text-3xl font-bold">Gadgetverse</div>
        <ul className="hidden md:flex text-lg sm:text-2lg">
          <li className="mx-[10px] sm:mx-[20px] cursor-pointer h-10 w-[80px] sm:w-[120px] flex items-center justify-center">
          <Link to="/home" className="hover:text-red-400">HOME</Link>
          </li>
          <li className="mx-[10px] sm:mx-[20px] cursor-pointer h-10 w-[80px] sm:w-[120px] flex items-center justify-center">
          <Link to="/shop" className="hover:text-red-400">SHOP</Link>
          </li>
          <li className="mx-[10px] sm:mx-[20px] cursor-pointer h-10 w-[80px] sm:w-[120px] flex items-center justify-center">
          <Link to="/about" className="hover:text-red-400">ABOUT US</Link>
          </li>
          <li className="mx-[10px] sm:mx-[20px] cursor-pointer h-10 w-[80px] sm:w-[120px] flex items-center justify-center">
          <Link to="/contact" className="hover:text-red-400">CONTACT US</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-5">
          <div className="flex items-center">
          <Link to="/login" className="font-bold mr-2 hover:text-pink-500 hover:cursor-pointer">
            <i className="fa-solid fa-user pr-2"></i>
            <span className="hidden sm:inline">Login</span>
          </Link>
          </div>
          <div className="flex items-center px-4">
          <Link to="/signup" className="font-bold mr-2 hover:text-pink-500 hover:cursor-pointer">
            <i className="fa-solid fa-user-plus pr-2"></i>
            <span className="hidden sm:inline">Signup</span>
          </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
