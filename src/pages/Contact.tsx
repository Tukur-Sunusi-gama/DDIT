import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

export const Contact = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16">
      {/* Contact Info */}
      <div>
        <h2 className="text-4xl font-black text-slate-900 mb-6">
          Let's Build Something{" "}
          <span className="text-[--color-primary]">Great</span>
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Whether you need a custom SaaS platform or business registration
          assistance, our team is ready to assist.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-3 rounded-xl text-[--color-primary]">
              <Mail />
            </div>
            <div>
              <h4 className="font-bold">Email Us</h4>
              <p className="text-gray-500 text-sm">hello@doubledigit.it</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-50 p-3 rounded-xl text-[--color-secondary]">
              <Phone />
            </div>
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-gray-500 text-sm">+234 (0) 800 DDIT SOL</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-slate-50 p-3 rounded-xl text-slate-600">
              <MapPin />
            </div>
            <div>
              <h4 className="font-bold">Location</h4>
              <p className="text-gray-500 text-sm">
                Lagos, Nigeria | Remote Global
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Form */}
      <div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-50 border border-gray-100">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 bg-accent rounded-xl border-none focus:ring-2 focus:ring-[--color-primary]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-4 bg-accent rounded-xl border-none focus:ring-2 focus:ring-[--color-primary]"
            />
          </div>
          <input
            type="email"
            placeholder="Work Email"
            className="w-full p-4 bg-accent rounded-xl border-none focus:ring-2 focus:ring-[--color-primary]"
          />
          <textarea
            placeholder="How can we help?"
            className="w-full p-4 bg-accent rounded-xl border-none focus:ring-2 focus:ring-[--color-primary] h-32"
          ></textarea>
          <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);
