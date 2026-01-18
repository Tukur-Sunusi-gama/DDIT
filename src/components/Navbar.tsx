import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Sun, Moon } from "lucide-react";
import { supabase } from "../api/supabaseClient";

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  isAdmin: boolean;
};

export const Navbar = ({ theme, onToggleTheme, isAdmin }: NavbarProps) => {
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
    <nav className="sticky top-0 z-50 bg-[var(--color-surface)] backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-bold text-2xl text-[var(--color-primary)]"
        >
          <img
            src="/images/ddit%20logo%202.jpeg"
            alt="DDIT"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span>DDIT</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {isAdmin && (
            <Link
              to="/admin"
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              Admin
            </Link>
          )}
          <Link
            to="/dashboard"
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all"
          >
            <User size={18} />
            Client Area
          </Link>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-[var(--color-accent)] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Toggle color theme"
            type="button"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleLogout}
            className="text-[var(--color-muted)] hover:text-red-500 transition-colors"
          >
            <LogOut size={20} />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-[var(--color-text)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Container */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4 font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-text)] text-lg py-2 border-b border-[var(--color-border)] last:border-0"
              >
                {link.name}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-text)] text-lg py-2 border-b border-[var(--color-border)]"
              >
                Admin
              </Link>
            )}
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-4 rounded-xl mt-2"
            >
              <User size={18} /> Dashboard
            </Link>
            <button
              onClick={onToggleTheme}
              className="flex items-center justify-center gap-2 bg-[var(--color-accent)] text-[var(--color-text)] py-3 rounded-xl"
              type="button"
            >
              {theme === "dark" ? (
                <>
                  <Sun size={18} /> Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} /> Dark Mode
                </>
              )}
            </button>
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
