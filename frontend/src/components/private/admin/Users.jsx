import React from 'react'

function Users() {
  return (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">SN.</th>
                <th className="border border-gray-300 px-4 py-2">Customer ID</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No users available
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Users
