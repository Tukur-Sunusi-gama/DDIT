import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="flex flex-col">
    <section className="pt-32 pb-20 px-6 text-center">
      <h1 className="text-6xl md:text-7xl font-black tracking-tight text-slate-900 mb-6">
        Software Engineering <br />
        <span className="text-[--color-primary]">Perfected.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
        Double Digit IT Solutions provides premium SaaS development, web design,
        and business registration services for the next generation of industry
        leaders.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          to="/dashboard"
          className="bg-[--color-primary] text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all"
        >
          Get a Quote <ArrowRight size={20} />
        </Link>
        <Link
          to="/services"
          className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
        >
          View Services
        </Link>
      </div>
    </section>

    <section className="bg-white py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {["SaaS Development", "CAC Registration", "Web Architecture"].map(
          (item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 text-lg font-semibold text-slate-700"
            >
              <CheckCircle2 className="text-[--color-secondary]" />
              {item}
            </div>
          )
        )}
      </div>
    </section>
  </div>
);
