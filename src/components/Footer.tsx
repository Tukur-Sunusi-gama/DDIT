import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DDIT</h3>
            <p>Your trusted partner for IT solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              <li>SaaS Development</li>
              <li>Web Design</li>
              <li>CAC Registration</li>
              <li>IT Consultancy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>Email: contact@ddit.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 DDIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
