import { Code, Layout, Landmark, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "SaaS Development",
    desc: "End-to-end cloud software solutions built with React, Node, and scalable architectures.",
    icon: Code,
    color: "bg-[var(--color-accent)] text-[var(--color-primary)]",
  },
  {
    title: "Web Design & UI/UX",
    desc: "Modern, high-converting websites that prioritize user experience and brand identity.",
    icon: Layout,
    color: "bg-[var(--color-accent)] text-[var(--color-secondary)]",
    image: "/images/web%20design.png",
  },
  {
    title: "CAC Registration",
    desc: "Professional business and company registration services to get your firm legally recognized.",
    icon: Landmark,
    color: "bg-[var(--color-accent)] text-[var(--color-primary)]",
    href: "/cac",
  },
  {
    title: "IT Consultancy",
    desc: "Strategic guidance on digital transformation, infrastructure, and tech stack optimization.",
    icon: ShieldCheck,
    color: "bg-[var(--color-accent)] text-[var(--color-secondary)]",
  },
];

export const Services = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Professional Solutions
      </h2>
      <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg">
        We provide the technical and administrative foundation required for
        modern business success.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {services.map((s, i) => (
        // Find this line inside your services.map:
        <div
          key={i}
          className="card-surface group p-10 rounded-3xl hover:shadow-xl hover:border-[var(--color-primary)]/20 transition-all duration-300"
        >
          <div
            className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6`}
          >
            <s.icon size={28} />
          </div>
          {/* The text colors will automatically handle themselves if we use slate-900 and gray-600 */}
          <h3 className="text-2xl font-bold mb-4 text-[var(--color-text)]">
            {s.title}
          </h3>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            {s.desc}
          </p>

          <Link
            to={s.href ?? "/dashboard"}
            className="inline-flex items-center gap-2 font-bold text-[var(--color-primary)] hover:gap-3 transition-all"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      ))}
    </div>
  </div>
);
