import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-20 text-white bg-[#142441] flex items-center justify-between px-4 md:px-8">
        <div className="text-2xl sm:text-4xl font-bold">
          <Link to="/" className="hover:text-red-400">Gadgetverse</Link>
        </div>
        
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
        </div>

        <ul className={`absolute md:static top-20 left-0 w-full bg-[#142441] md:flex justify-center text-[20px] transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
          <li className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:w-[120px] flex items-center justify-center">
            <Link to="/home" className="hover:text-red-400">HOME</Link>
          </li>
          <li className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:w-[120px] flex items-center justify-center">
            <Link to="/shop" className="hover:text-red-400">SHOP</Link>
          </li>
          <li className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:w-[120px] flex items-center justify-center">
            <Link to="/about" className="hover:text-red-400">ABOUT US</Link>
          </li>
          <li className="mx-4 py-2 md:py-0 cursor-pointer h-10 w-full md:w-[120px] flex items-center justify-center">
            <Link to="/contact" className="hover:text-red-400">CONTACT US</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-5 text-[20px]">
          <div className="flex items-center">
            <Link to="/login" className="font-bold mr-2 hover:text-pink-500 hover:cursor-pointer flex items-center">
              <i className="fa-solid fa-user pr-2"></i>
              <span>Login</span>
            </Link>
          </div>
          <div className="flex items-center px-4 text-[20px]">
            <Link to="/signup" className="font-bold mr-2 hover:text-pink-500 hover:cursor-pointer flex items-center">
              <i className="fa-solid fa-user-plus pr-2"></i>
              <span>Signup</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
