import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="w-full h-20 text-white bg-[#142441] flex items-center justify-between px-4">
        <div className="text-2xl sm:text-3xl font-bold">Gadgetverse</div>
        <ul className="hidden md:flex text-lg sm:text-2lg">
          <li className="mx-[10px] sm:mx-[20px] cursor-pointer h-10 w-[80px] sm:w-[120px] flex items-center justify-center">
            HOME
          </li>
          <li className="mx-[10px] sm:mx-[20px] cursor-pointer h-10 w-[80px] sm:w-[120px] flex items-center justify-center">
            SHOP
          </li>
          <li className="mx-[10px] sm:mx-[20px] cursor-pointer h-10 w-[80px] sm:w-[120px] flex items-center justify-center">
            ABOUT US
          </li>
          <li className="mx-[10px] sm:mx-[20px] cursor-pointer h-10 w-[80px] sm:w-[120px] flex items-center justify-center">
            CONTACT US
          </li>
        </ul>

        <div className="flex items-center space-x-5">
          <div className="flex items-center">
            <i className="fa-solid fa-user pr-2"></i>
            <span className="hidden sm:inline">Login</span>
          </div>
          <div className="flex items-center px-4">
            <i className="fa-solid fa-user-plus pr-2"></i>
            <span className="hidden sm:inline">Signup</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
