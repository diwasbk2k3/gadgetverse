import React from 'react'

function UploadProduct() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload A Product</h2>
      <form className="space-y-4">
        {/* Product Name */}
        <div>
          <label
            htmlFor="productName" className="block text-gray-700 font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Price */}
        <div>
          <label htmlFor="productPrice" className="block text-gray-700 font-medium mb-2">
            Product Price
          </label>
          <input
            type="text"
            id="productPrice"
            placeholder="Enter product price"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Image URL */}
        <div>
          <label htmlFor="productImage" className="block text-gray-700 font-medium mb-2">
            Product Image URL
          </label>
          <input
            type="text"
            id="productImage"
            placeholder="Enter image URL"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Category */}
        <div>
          <label htmlFor="productCategory" className="block text-gray-700 font-medium mb-2">
            Product Category
          </label>
          <select
            id="productCategory"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="smartwatch">Smartwatch</option>
            <option value="drone">Drone</option>
            <option value="camera">Camera</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Product Description */}
        <div>
          <label htmlFor="productDescription" className="block text-gray-700 font-medium mb-2">
            Product Description
          </label>
          <textarea
            id="productDescription"
            placeholder="Enter product description"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer">
          Upload Product
        </button>
      </form>
    </div>
  )
}

export default UploadProduct