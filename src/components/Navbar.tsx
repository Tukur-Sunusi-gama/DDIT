import { Link } from "react-router-dom";
import { Monitor, Menu, User } from "lucide-react";

export const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center gap-2 font-bold text-2xl text-[--color-primary]"
      >
        <Monitor size={32} />
        <span>DDIT</span>
      </Link>

      <div className="hidden md:flex items-center gap-10 font-medium">
        <Link to="/" className="hover:text-[--color-primary] transition-colors">
          Home
        </Link>
        <Link
          to="/services"
          className="hover:text-[--color-primary] transition-colors"
        >
          Services
        </Link>
        <Link
          to="/about"
          className="hover:text-[--color-primary] transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-[--color-primary] transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center gap-2 bg-[--color-primary] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all"
        >
          <User size={18} />
          Client Area
        </Link>
      </div>
      <Menu className="md:hidden" />
    </div>
  </nav>
);
