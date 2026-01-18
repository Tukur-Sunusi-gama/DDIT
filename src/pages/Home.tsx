import { ArrowRight, Boxes, Building2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="flex flex-col">
    <section className="pt-32 pb-20 px-6 text-center">
      <h1 className="text-6xl md:text-7xl font-black tracking-tight text-[var(--color-text)] mb-6">
        Software Engineering <br />
        <span className="text-[var(--color-primary)]">Perfected.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-xl text-[var(--color-muted)] mb-10 leading-relaxed">
        Double Digit IT Solutions provides premium SaaS development, web design,
        and business registration services for the next generation of industry
        leaders.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          to="/dashboard"
          className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all"
        >
          Get a Quote <ArrowRight size={20} />
        </Link>
        <Link
          to="/services"
          className="bg-[var(--color-surface)] text-[var(--color-text)] border-2 border-[var(--color-border)] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[var(--color-accent)] transition-all"
        >
          View Services
        </Link>
      </div>
    </section>

    <section className="bg-[var(--color-surface)] py-20 border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "SaaS Development",
            desc: "Launch scalable platforms built for growth and reliability.",
            icon: Boxes,
            href: "/services",
            image: "/images/SaaS.png",
          },
          {
            title: "CAC Registration",
            desc: "Fast-track your business compliance and legal setup.",
            icon: Building2,
            href: "/cac",
            image: "/images/cac%20card.jpeg",
          },
          {
            title: "Business & IT Consultancy",
            desc: "Strategic tech guidance to align systems with business goals.",
            icon: ShieldCheck,
            href: "/services",
            image: "/images/business-it-consultancy.png",
          },
        ].map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="card-surface group rounded-3xl overflow-hidden transition-all hover:shadow-xl"
          >
            <div className="h-44 w-full bg-[var(--color-accent)] overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <item.icon className="text-[var(--color-primary)]" size={44} />
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <item.icon className="text-[var(--color-primary)]" size={22} />
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)]">
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </div>
);
