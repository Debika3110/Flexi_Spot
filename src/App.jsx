import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    
      
     <div className="bg-gray-50 min-h-screen">
        <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
     </div>
    
  );
}

export default App;
