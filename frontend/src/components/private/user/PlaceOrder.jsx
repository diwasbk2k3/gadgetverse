import React from 'react'

function PlaceOrder() {
  return (
    <>
      <div className="h-[125px] flex w-full bg-white">
        <div className="w-full bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">Place Your Order!</h2>
          <p className="text-gray-600 text-center">Fill out the details below</p>
        </div>
      </div>

      <div className="m-5">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Product Details</h3>
          <p><strong>Name:</strong></p>
          <p><strong>Price:</strong></p>
          <p><strong>Description:</strong></p>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Product Image"
            className="h-[200px] object-cover rounded mt-5"
          />
        </div>

        <form >
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-gray-700 font-semibold mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              placeholder="Enter quantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors hover:cursor-pointer"
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  )
}

export default PlaceOrder