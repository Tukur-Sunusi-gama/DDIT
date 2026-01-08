import React from "react";
import { Code, Palette, FileText, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "SaaS Development",
      description:
        "We build robust, scalable Software as a Service applications tailored to your business needs. From concept to deployment, our team ensures high performance and security.",
      features: [
        "Custom development",
        "Cloud integration",
        "Scalable architecture",
        "Ongoing support",
      ],
    },
    {
      icon: Palette,
      title: "Web Design",
      description:
        "Create stunning, user-friendly websites that engage your audience and drive conversions. Our designs are responsive, SEO-optimized, and aligned with your brand.",
      features: [
        "Responsive design",
        "UI/UX optimization",
        "SEO-friendly",
        "Brand integration",
      ],
    },
    {
      icon: FileText,
      title: "CAC Registration",
      description:
        "Navigate the complexities of business registration in Nigeria with our expert assistance. We handle all paperwork and ensure compliance with CAC requirements.",
      features: [
        "Document preparation",
        "Compliance check",
        "Fast processing",
        "Legal guidance",
      ],
    },
    {
      icon: Cpu,
      title: "IT Consultancy",
      description:
        "Get expert advice on IT strategy, infrastructure optimization, and technology adoption. We help you make informed decisions for your digital transformation.",
      features: [
        "IT strategy planning",
        "Infrastructure assessment",
        "Technology recommendations",
        "Implementation support",
      ],
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <service.icon className="w-16 h-16 text-primary mb-6" />
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
