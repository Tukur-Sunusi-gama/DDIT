import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            DDIT
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-primary transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary transition"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="/dashboard"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
