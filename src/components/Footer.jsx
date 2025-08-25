import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Railway Express</h3>
            <p className="text-gray-300 text-sm mb-3 max-w-md">
              Your trusted online railway ticket booking platform. Search trains, 
              check availability, and book tickets instantly from the comfort of your home.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiGithub size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-2 text-blue-400">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/book-tickets" className="text-gray-300 hover:text-white">Book Tickets</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-white">Login</a></li>
              <li><a href="/register" className="text-gray-300 hover:text-white">Register</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-2 text-blue-400">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FiMail className="text-gray-400" size={14} />
                <span className="text-gray-300">support@railwayexpress.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="text-gray-400" size={14} />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-gray-400" size={14} />
                <span className="text-gray-300">123 Railway St, Kolkata, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © 2025 <span className="font-semibold text-blue-400">Railway Express</span>. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0 text-xs">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Refunds</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
