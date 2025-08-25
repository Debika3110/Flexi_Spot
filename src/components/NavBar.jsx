import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrain } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-gray-900/90 backdrop-blur-lg text-white shadow-lg rounded-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-400"
        >
          <FaTrain />
          Railway Express
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Book Tickets", "Train Schedule", "About Us"].map(
            (item, idx) => (
              <Link
                key={idx}
                to={
                  item === "Home"
                    ? "/"
                    : item === "Book Tickets"
                    ? "/book-tickets"
                    : item === "Train Schedule"
                    ? "/train-schedule"
                    : "/about"
                }
                className="relative group hover:text-blue-400 transition"
              >
                {item}
                {/* Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-full text-black font-bold bg-slate-200 hover:bg-blue-500 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg px-6 py-4 space-y-4 rounded-b-2xl">
          {["Home", "Book Tickets", "Train Schedule", "About Us"].map(
            (item, idx) => (
              <Link
                key={idx}
                to={
                  item === "Home"
                    ? "/"
                    : item === "Book Tickets"
                    ? "/book-tickets"
                    : item === "Train Schedule"
                    ? "/train-schedule"
                    : "/about"
                }
                className="block relative group hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
                {/* Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}

          <hr className="border-gray-700" />

          <Link
            to="/login"
            className="block px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
