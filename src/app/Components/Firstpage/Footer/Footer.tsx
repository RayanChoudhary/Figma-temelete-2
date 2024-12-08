import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {/* Menu Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Recently Viewed</li>
              <li>Popular This Week</li>
              <li>All Products</li>
            </ul>
          </div>

          {/* Category Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant Pots</li>
              <li>Chairs</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Vacancies</li>
              <li>Contact Us</li>
              <li>Privacy</li>
              <li>Return Policy</li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Mailing List</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
          {/* Copyright */}
          <p className="text-sm">
            © 2024 Avion LTD. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
