import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-purple-600 p-4 shadow-lg">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link 
            to="/" 
            className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/review" 
            className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300"
          >
            Movie Review
          </Link>
        </li>
        <li>
          <Link 
            to="/result" 
            className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300"
          >
            Result
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
