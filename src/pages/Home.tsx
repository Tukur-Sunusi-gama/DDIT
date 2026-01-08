import React from "react";
import { Link } from "react-router-dom";
import { Code, Palette, FileText, Cpu } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Empower Your Business with Cutting-Edge IT Solutions
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From SaaS development to web design, CAC registration, and
            comprehensive IT consultancy, we deliver innovative solutions
            tailored to your needs.
          </p>
          <Link
            to="/dashboard"
            className="bg-secondary text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SaaS Development</h3>
              <p>Build scalable software solutions for your business.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p>Create stunning, responsive websites that convert.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">CAC Registration</h3>
              <p>Streamline your business registration process.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">IT Consultancy</h3>
              <p>Expert advice to optimize your IT infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
