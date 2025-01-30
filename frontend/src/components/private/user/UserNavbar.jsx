import React from "react";
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex flex-wrap justify-between items-center shadow-lg">
      <div className="flex flex-wrap space-x-4 md:space-x-6">
        <Link to="dashboard" className="hover:text-red-400 text-lg font-medium flex items-center">
          <i className="fa-solid fa-clapperboard pr-2"></i> Dashboard
        </Link>

        <Link to="shopping" className="hover:text-red-400 text-lg font-medium flex items-center">
        <i className="fa-solid fa-cart-shopping pr-2"></i>Shopping
        </Link>

        <Link to="myorders" className="hover:text-red-400 text-lg font-medium flex items-center">
        <i class="fa-solid fa-truck-fast pr-2"></i>My Orders
        </Link>
      </div>

      {/* Logout Button */}
      <button className="hover:text-red-400 text-lg font-medium flex items-center hover:cursor-pointer mt-2 md:mt-0">
        <i className="fa-solid fa-sign-out pr-2"></i> Logout
      </button>
    </nav>
  );
}

export default UserNavbar;
