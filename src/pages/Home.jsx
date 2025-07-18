import { Link } from "react-router-dom";
import bgImage from "../assets/bg-image.jpg";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 opacity-75">
          FlexiSpot
        </h1>
        <p>
          
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-grey-yellow hover:bg-cyan-100 text-black border-2 border-black font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Log In
          </Link>
         
        </div>
      </div>
    </div>
  );
}
