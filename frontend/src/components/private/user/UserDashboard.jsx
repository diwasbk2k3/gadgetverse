import React, { useState, useEffect } from "react";

function UserDashboard() {
  const [greeting, setGreeting] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Greeting */}
      <h1 className="text-2xl font-semibold text-gray-800">{greeting}, User!</h1>
      <p className="mt-2 text-gray-600">Manage your profile and track your purchase summary.</p>
      {/* Dashboard Section*/}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="p-4 bg-green-500 text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => setShowPasswordForm(true)}
        >
          <h2 className="text-lg font-semibold">Profile</h2>
          <p className="text-sm">Manage your account details.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-xl font-bold">12</p>
          </div>

          <div className="p-4 bg-purple-500 text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h2 className="text-lg font-semibold">Spent Money</h2>
            <p className="text-xl font-bold">$1,250</p>
          </div>
        </div>
      </div>

      {showPasswordForm && (
        <div className="mt-8 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <input type="password" placeholder="Current Password" className="w-full p-2 rounded mt-5" />
          <input type="password" placeholder="New Password" className="w-full p-2 rounded mt-3" />
          <input type="password" placeholder="Confirm New Password" className="w-full p-2 rounded mt-3" />
          <button className="bg-green-500 text-white px-8 py-2 mt-4 rounded hover:cursor-pointer">Submit</button>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
