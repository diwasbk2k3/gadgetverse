import React from 'react'
import Location from './Location';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <div className="h-[125px] flex w-full bg-white">
        <div className="w-full bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">
              Get in Touch!
          </h2>
          <p className="text-gray-600 text-center">We'd love to hear from you</p>
        </div>
      </div>
      {/* Contact Form */}
      <div>
        <form class="m-5">
          <div class="mb-6">
            <label htmlFor="name" class="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="mb-6">
            <label htmlFor="email" class="block text-gray-700 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="mb-6">
            <label htmlFor="message" class="block text-gray-700 font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      <Location/>
      <Footer/>
    </>
  )
}

export default Contact