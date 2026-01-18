import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Branding */}
        <div className="space-y-6">
          <Link
            to="/"
            className="flex items-center gap-3 font-bold text-2xl text-[var(--color-primary)]"
          >
            <img
              src="/images/ddit%20logo%202.jpeg"
              alt="DDIT"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span>DDIT</span>
          </Link>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            Premium SaaS development and IT consultancy for modern businesses.
            We turn double-digit growth dreams into technical reality.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-[var(--color-accent)] text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors rounded-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-[var(--color-accent)] text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors rounded-lg"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-[var(--color-text)] mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-[var(--color-muted)]">
            <li>
              <Link to="/" className="hover:text-[var(--color-primary)]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[var(--color-primary)]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[var(--color-primary)]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[var(--color-primary)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="font-bold text-[var(--color-text)] mb-6">Expertise</h4>
          <ul className="space-y-4 text-sm text-[var(--color-muted)]">
            <li>
              <Link to="/services" className="hover:text-[var(--color-primary)]">
                SaaS Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[var(--color-primary)]">
                Web Design
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[var(--color-primary)]">
                CAC Registration
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[var(--color-primary)]">
                IT Consultancy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-bold text-[var(--color-text)] mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-[var(--color-muted)]">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[var(--color-primary)]" />
              hello@doubledigit.it
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[var(--color-primary)]" />
              +234 000 000 0000
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[var(--color-primary)]" />
              Lagos, Nigeria
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[var(--color-muted)]">
        <p>
          © {new Date().getFullYear()} Double Digit IT Solutions. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[var(--color-text)]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[var(--color-text)]">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

