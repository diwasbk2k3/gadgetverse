import React, { useState } from "react";
import EditProduct from "./EditProduct";

function ManageProduct() {
  const [editProduct, setEditProduct] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Products</h2>

      {editProduct && <EditProduct setEditProduct={setEditProduct} />}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">SN.</th>
              <th className="border border-gray-300 px-4 py-2">Product ID</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Edit</th>
              <th className="border border-gray-300 px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">101</td>
              <td className="border border-gray-300 px-4 py-2">Sample Product</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => setEditProduct(true)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 hover:cursor-pointer w-full sm:w-auto"
                >
                  Edit
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => alert('Delete functionality not implemented yet')}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 hover:cursor-pointer w-full sm:w-auto"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageProduct;
