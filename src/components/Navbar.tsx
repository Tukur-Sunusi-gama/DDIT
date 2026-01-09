import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Monitor, Menu, X, User, LogOut } from "lucide-react";
import { supabase } from "../api/supabaseClient";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl text-blue-600"
        >
          <Monitor size={32} />
          <span>DDIT</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-slate-900 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/dashboard"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all"
          >
            <User size={18} />
            Client Area
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <LogOut size={20} />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Container */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4 font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-slate-900 text-lg py-2 border-b border-gray-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl mt-2"
            >
              <User size={18} /> Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 text-red-500 py-2"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
