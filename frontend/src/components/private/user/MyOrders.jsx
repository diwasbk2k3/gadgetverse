import React from 'react'

function MyOrders() {
  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">My Orders</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mt-6 min-w-max">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">SN.</th>
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Product ID</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Total Price</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10" className="text-center py-4">
                No orders found for this customer
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
