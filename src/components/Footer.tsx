import { Link } from "react-router-dom";
import { Monitor, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Branding */}
        <div className="space-y-6">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-2xl text-[--color-primary]"
          >
            <Monitor size={28} />
            <span>DDIT</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            Premium SaaS development and IT consultancy for modern businesses.
            We turn double-digit growth dreams into technical reality.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-slate-50 text-gray-400 hover:text-[--color-primary] transition-colors rounded-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-50 text-gray-400 hover:text-[--color-primary] transition-colors rounded-lg"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-[--color-primary]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[--color-primary]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[--color-primary]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[--color-primary]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Expertise</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>
              <Link to="/services" className="hover:text-[--color-primary]">
                SaaS Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[--color-primary]">
                Web Design
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[--color-primary]">
                CAC Registration
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[--color-primary]">
                IT Consultancy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[--color-primary]" />
              hello@doubledigit.it
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[--color-primary]" />
              +234 000 000 0000
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[--color-primary]" />
              Lagos, Nigeria
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
        <p>
          © {new Date().getFullYear()} Double Digit IT Solutions. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-900">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-900">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
