import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

export const Contact = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16">
      {/* Contact Info */}
      <div>
        <h2 className="text-4xl font-black text-[var(--color-text)] mb-6">
          Let's Build Something{" "}
          <span className="text-[var(--color-primary)]">Great</span>
        </h2>
        <p className="text-[var(--color-muted)] text-lg mb-10">
          Whether you need a custom SaaS platform or business registration
          assistance, our team is ready to assist.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--color-accent)] p-3 rounded-xl text-[var(--color-primary)]">
              <Mail />
            </div>
            <div>
              <h4 className="font-bold text-[var(--color-text)]">Email Us</h4>
              <p className="text-[var(--color-muted)] text-sm">
                hello@doubledigit.it
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-[var(--color-accent)] p-3 rounded-xl text-[var(--color-secondary)]">
              <Phone />
            </div>
            <div>
              <h4 className="font-bold text-[var(--color-text)]">Call Us</h4>
              <p className="text-[var(--color-muted)] text-sm">+234 (0) 800 DDIT SOL</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-[var(--color-accent)] p-3 rounded-xl text-[var(--color-text)]">
              <MapPin />
            </div>
            <div>
              <h4 className="font-bold text-[var(--color-text)]">Location</h4>
              <p className="text-[var(--color-muted)] text-sm">
                Lagos, Nigeria | Remote Global
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Form */}
      <div className="bg-[var(--color-surface)] p-8 rounded-3xl shadow-xl border border-[var(--color-border)]">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 bg-accent rounded-xl border-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-4 bg-accent rounded-xl border-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
          <input
            type="email"
            placeholder="Work Email"
            className="w-full p-4 bg-accent rounded-xl border-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <textarea
            placeholder="How can we help?"
            className="w-full p-4 bg-accent rounded-xl border-none focus:ring-2 focus:ring-[var(--color-primary)] h-32"
          ></textarea>
          <button className="w-full bg-[var(--color-text)] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);
