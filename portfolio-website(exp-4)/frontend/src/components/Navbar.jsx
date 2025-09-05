// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">Jayasri</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-400">
          Projects
        </Link>
        <Link to="/skills" className="hover:text-blue-400">
          Skills
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
