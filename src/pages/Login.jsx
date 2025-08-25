import { useState } from "react";
import "../App.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center 
      bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800"
    >
      <div className={`flip-container ${showSignup ? "flipped" : ""}`}>
        
        {/* Login Side */}
        <div className={`flip-side front w-[500px] bg-white/10 backdrop-blur-xl 
        border border-white/20 shadow-2xl rounded-2xl p-8 ${showSignup ? "" : "active"}`}>
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="userID" className="block text-gray-200 text-sm font-medium mb-1">User ID</label>
              <input
                type="text"
                id="userID"
                name="userID"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your ID"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-200 text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                  border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-16"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-indigo-300 hover:text-white focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 
              text-white font-semibold py-2 px-4 rounded-full 
              hover:from-indigo-600 hover:to-blue-700 transition duration-300 shadow-lg"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-300">New user?</p>
            <button
              onClick={() => setShowSignup(true)}
              className="mt-2 text-indigo-300 hover:text-indigo-400 font-medium focus:outline-none"
            >
              Go to Sign Up
            </button>
          </div>
        </div>

        {/* Signup Side */}
        <div className={`flip-side back w-[500px] bg-white/10 backdrop-blur-xl 
        border border-white/20 shadow-2xl rounded-2xl p-8 ${showSignup ? "active" : ""}`}>
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="userName" className="block text-gray-200 text-sm font-medium mb-1">User Name</label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="signupUserID" className="block text-gray-200 text-sm font-medium mb-1">User ID</label>
              <input
                type="text"
                id="signupUserID"
                name="userID"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="ID123"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="signupPassword" className="block text-gray-200 text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showSignupPassword ? "text" : "password"}
                  id="signupPassword"
                  name="password"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                  border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-16"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-indigo-300 hover:text-white focus:outline-none"
                >
                  {showSignupPassword ? "Hide" : "Show"}
                </button>
              </div>
              <p className="text-xs text-gray-300 mt-1">Must contain letters, numbers, and symbols</p>
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-200 text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showSignupConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                  border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-16"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-indigo-300 hover:text-white focus:outline-none"
                >
                  {showSignupConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="role" className="block text-gray-200 text-sm font-medium mb-1">Role</label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-gray-900 border border-white/20 
                focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 
              text-white font-semibold py-2 px-4 rounded-full 
              hover:from-indigo-600 hover:to-blue-700 transition duration-300 shadow-lg"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">Already have an account?</p>
            <button
              onClick={() => setShowSignup(false)}
              className="mt-2 text-indigo-300 hover:text-indigo-400 font-medium focus:outline-none"
            >
              Go to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
