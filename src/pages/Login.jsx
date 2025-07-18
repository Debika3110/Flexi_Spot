import { useState } from "react";
import "../App.css";
import bgImage from "../assets/bg-image.jpg";
import axios from "axios";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);

  const [showSignup, setShowSignup] = useState(false);
  const [loginData, setLoginData] = useState({ employeeID: "", password: "" });
  const [signupData, setSignupData] = useState({
    employeeName: "",
    employeeID: "",
    password: "",
    confirmPassword: "",
    role: "EMPLOYEE",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8080/api/auth/login", {
      employeeId: loginData.employeeID,
      password: loginData.password,
    });

    if (response.data && response.data.token) {
      // Save the JWT token
      localStorage.setItem("token", response.data.token);

      // ✅ Make the protected request immediately after login
      const token = response.data.token;
      axios.get("http://localhost:8080/api/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Dashboard data:", res.data);
      })
      .catch((err) => {
        console.error("Unauthorized or Forbidden", err);
      });

      // Show success and redirect based on role
      alert("Login successful!");
      const userRole = response.data.role;
      if (userRole === "ADMIN") {
        window.location.href = "/admindashboard";
      } else {
        window.location.href = "/dashboard";
      }
    } else {
      alert("Login failed!");
    }
  } catch (error) {
    console.error(error);
    alert("Login failed!");
  }
};



  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", {
        employeeId: signupData.employeeID,
        employeeName: signupData.employeeName,
        password: signupData.password,
        role: signupData.role,
      });

      alert(response.data);

      setShowSignup(false);
      setSignupData({
        employeeName: "",
        employeeID: "",
        password: "",
        confirmPassword: "",
        role: "EMPLOYEE",
      });
    } catch (error) {
      console.error(error);
      alert("Signup failed!");
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center perspective"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})`,
      }}
    >
      <div className={`flip-container ${showSignup ? "flipped" : ""}`}>
        {/* Login Side */}
        <div className={`flip-side front w-[500px] bg-white/20 backdrop-blur-md border border-white/30 ${showSignup ? "" : "active"}`}>
          <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg">Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label htmlFor="employeeID" className="block text-white text-sm font-medium mb-1">Employee ID</label>
              <input
                type="text"
                id="employeeID"
                name="employeeID"
                className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your ID"
                value={loginData.employeeID}
                onChange={handleLoginChange}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-10"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-white focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-bold py-2 px-4 rounded-full hover:bg-cyan-500 transition duration-300 shadow-lg"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-white">New employee?</p>
            <button
              onClick={() => setShowSignup(true)}
              className="mt-2 text-cyan-300 hover:text-cyan-400 font-medium focus:outline-none"
            >
              Go to Sign Up
            </button>
          </div>
        </div>

        {/* Signup Side */}
        <div className={`flip-side back w-[500px] bg-white/20 backdrop-blur-md border border-white/30 ${showSignup ? "active" : ""}`}>
          <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg">Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-4">
              <label htmlFor="employeeName" className="block text-white text-sm font-medium mb-1">Employee Name</label>
              <input
                type="text"
                id="employeeName"
                name="employeeName"
                className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your Name"
                value={signupData.employeeName}
                onChange={handleSignupChange}
                pattern="^[A-Za-z ]+$"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="signupEmployeeID" className="block text-white text-sm font-medium mb-1">Employee ID</label>
              <input
                type="text"
                id="signupEmployeeID"
                name="employeeID"
                className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="ID123"
                value={signupData.employeeID}
                onChange={handleSignupChange}
                pattern="^[A-Za-z0-9]+$"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="signupPassword" className="block text-white text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showSignupPassword ? "text" : "password"}
                  id="signupPassword"
                  name="password"
                  className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-10"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-white focus:outline-none"
                >
                  {showSignupPassword ? "Hide" : "Show"}
                </button>
              </div>
              <p className="text-xs text-gray-200 mt-1">Must contain letters, numbers, and symbols</p>
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showSignupConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-10"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-white focus:outline-none"
                >
                  {showSignupConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="role" className="block text-white text-sm font-medium mb-1">Role</label>
              <select
                id="role"
                name="role"
                value={signupData.role}
                onChange={handleSignupChange}
                className="w-full px-4 py-2 rounded-md bg-white/30 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              >
                <option value="EMPLOYEE">Employee</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-bold py-2 px-4 rounded-full hover:bg-cyan-500 transition duration-300 shadow-lg"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white">Already have an account?</p>
            <button
              onClick={() => setShowSignup(false)}
              className="mt-2 text-cyan-300 hover:text-cyan-400 font-medium focus:outline-none"
            >
              Go to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
