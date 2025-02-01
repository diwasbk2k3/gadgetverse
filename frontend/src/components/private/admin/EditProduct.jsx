import React from "react";

function EditProduct() {
  return (
    <form className="space-y-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-2xl text-gray-900 font-bold mb-6 text-center">Edit Product</h3>

      {/* Product Name */}
      <div>
        <label 
          htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Product Price */}
      <div>
        <label 
          htmlFor="price" className="block text-gray-700 font-medium mb-1">
          Product Price
        </label>
        <input
          type="text"
          id="price"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
       {/* Product  Image Url */}
      <div>
        <label 
          htmlFor="price" className="block text-gray-700 font-medium mb-1">
          Product Image URL
        </label>
        <input
          type="text"
          id="image"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* Product Category */}
      <div>
        <label 
          htmlFor="category" className="block text-gray-700 font-medium mb-1">
          Product Category
        </label>
        <select
          id="category"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
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
        <label 
          htmlFor="description" className="block text-gray-700 font-medium mb-1">
          Product Description
        </label>
        <textarea
          id="description"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-10 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-red-500 text-white px-10 py-2 rounded hover:bg-red-600 hover:cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditProduct;