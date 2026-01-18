import { Award, Target } from "lucide-react";

export const About = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
      <div>
        <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm">
          Our Story
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight text-[var(--color-text)]">
          Driving Innovation Through{" "}
          <span className="text-[var(--color-primary)]">Double Digit</span>{" "}
          Excellence.
        </h2>
        <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6">
          Double Digit IT Solutions (DDIT) was founded on the principle that
          technology should be accessible, scalable, and professional. We don't
          just build websites; we build business infrastructures.
        </p>
        <p className="text-[var(--color-muted)] text-lg leading-relaxed">
          From legal compliance with CAC to complex SaaS platforms, we handle
          the technical heavy lifting so you can focus on your vision.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[var(--color-surface)] p-8 rounded-3xl shadow-sm border border-[var(--color-border)]">
          <Target className="text-[var(--color-primary)] mb-4" />
          <h4 className="font-bold text-xl text-[var(--color-text)]">Mission</h4>
          <p className="text-sm text-[var(--color-muted)] mt-2">
            Accelerating digital growth across Africa.
          </p>
        </div>
        <div className="bg-[var(--color-surface)] p-8 rounded-3xl shadow-sm border border-[var(--color-border)] mt-8">
          <Award className="text-[var(--color-secondary)] mb-4" />
          <h4 className="font-bold text-xl text-[var(--color-text)]">Quality</h4>
          <p className="text-sm text-[var(--color-muted)] mt-2">
            Clean code and modern UI standards.
          </p>
        </div>
      </div>
    </div>
  </div>
);
