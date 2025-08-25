import React from "react";
import { FaTrain } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer"; // ✅ import footer

const Hero = () => {
  return (
    <div className="pt-24"> {/* Push content below fixed Navbar */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white text-center py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Book Your Train Tickets Online
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Fast, secure, and hassle-free railway ticket reservations for your journey.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/book-tickets"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition"
            >
              <FaTrain />
              Book Now
            </Link>
            <Link
              to="/login"
              className="inline-flex border-2 border-black items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-lg transition"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            We provide a modern platform for booking train tickets online with real-time updates,
            ensuring a smooth and secure travel experience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Book your tickets in just a few clicks with our user-friendly system.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Updates</h3>
            <p className="text-gray-600">
              Get live train schedules and seat availability instantly.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Multiple secure payment options for a hassle-free checkout.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
