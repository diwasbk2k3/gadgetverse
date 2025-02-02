import React from 'react';
import { Link } from 'react-router-dom';

function ShopCard() {
  return (
    <div className="bg-white text-black rounded-lg p-4 w-full sm:w-[300px] h-auto sm:h-[420px] ml-0 sm:ml-3 mb-3 flex flex-col justify-between shadow-lg">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Product Image"
        className="w-full h-[200px] object-cover rounded"
      />
      <div>
        <p className="text-lg font-semibold">MacBook</p>
        <p><strong>Category:</strong> Laptop</p>
        <p><strong>Price:</strong> RS 180000</p>
        <p><strong>Description:</strong> Best Selling Laptop</p>
      </div>
      <Link to="/user/shopping/placeorder">
        <button className="bg-slate-900 text-white w-full py-2 rounded-lg hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
          Buy Now
        </button>
      </Link>
    </div>
  );
}

export default ShopCard;