import React from 'react'

export default function Messages() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Messages</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mt-2 text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">SN.</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Contact</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="text-center py-4">
                No messages available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
