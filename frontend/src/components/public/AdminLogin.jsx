import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the GET request to fetch the admin by email
      const response = await axios.get(`http://localhost:5000/admins/${email}`);
      const admin = response.data; // Ensure this contains the expected structure

      // Log the response for debugging
      console.log('Admin from API:', admin);

      // Check if the password matches
      if (admin.password === password) {
        // Save the admin login status (localStorage)
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminEmail', email);
        navigate('/admin/dashboard'); // Redirect to the admin dashboard
      } else {
        setError('Incorrect password');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setError('Admin not found');
    }
  };


  return (
    <>
      <div className="h-[125px] flex w-full bg-white shadow-lg">
        <div className="w-full bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">
            Admin Login
          </h2>
          <p className="text-gray-600 text-center">Secure access to your admin panel</p>
        </div>
      </div>

      <div className="h-[600px] flex w-full bg-white shadow-lg">
        {/* Left Container (Image Section) */}
        <div className="w-[60%] flex justify-center">
          <img className="h-full object-fit" src="/admin_login.jpg" alt="Login" />
        </div>

        {/* Right Container (Login Form Section) */}
        <div className="w-[40%] bg-gradient-to-r from-blue-400 via-teal-500 to-pink-400">
          <form className="m-5"  onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-gray-800 text-center mt-12">
              Welcome Back!
            </h2>
            <p className="text-gray-600 text-center mb-12">Manage your platform with ease</p>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-12">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Login as User?{" "}
            <Link to="/login" className="text-blue-900 font-semibold hover:underline">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;