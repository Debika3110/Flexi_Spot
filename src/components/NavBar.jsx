import { Link } from "react-router-dom";

export default function Navbar() {
  function handleLogout() {
    console.log("User logged out!");
    // add logout logic here
  }

  return (
    <nav className="bg-blue-violet font-bold text-white px-8 py-4 flex justify-between items-center rounded-full mt-[20px] mx-[30px]">
      <div className="text-xl">FlexiSpot</div>
      <div className="space-x-6 flex items-center">
        <Link
          to="/"
          className="link-underline hover:text-light-blue "
        >
          Book a Seat
        </Link>
        <Link
          to="/my-bookings"
          className="link-underline hover:text-light-blue"
        >
          My Bookings
        </Link>
        <Link
          to="/admin"
          className="link-underline hover:text-light-blue "
        >
          Admin
        </Link>
        <button
          onClick={handleLogout}
          className="relative group hover:text-red-500 bg-cyan-400 border-[1.5px] border-white px-3 py-2 rounded-full outline-none"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}
