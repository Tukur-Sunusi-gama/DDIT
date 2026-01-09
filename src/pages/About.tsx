import { Award, Target, Users } from "lucide-react";

export const About = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
      <div>
        <span className="text-[--color-primary] font-bold tracking-widest uppercase text-sm">
          Our Story
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
          Driving Innovation Through{" "}
          <span className="text-[--color-primary]">Double Digit</span>{" "}
          Excellence.
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Double Digit IT Solutions (DDIT) was founded on the principle that
          technology should be accessible, scalable, and professional. We don't
          just build websites; we build business infrastructures.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          From legal compliance with CAC to complex SaaS platforms, we handle
          the technical heavy lifting so you can focus on your vision.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <Target className="text-[--color-primary] mb-4" />
          <h4 className="font-bold text-xl">Mission</h4>
          <p className="text-sm text-gray-500 mt-2">
            Accelerating digital growth across Africa.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mt-8">
          <Award className="text-[--color-secondary] mb-4" />
          <h4 className="font-bold text-xl">Quality</h4>
          <p className="text-sm text-gray-500 mt-2">
            Clean code and modern UI standards.
          </p>
        </div>
      </div>
    </div>
  </div>
);
