import React from "react";
import Tittle from "../Shared/Tittle";

const IndustryExpertise = () => {
  const industries = [
    {
      name: "FinTech",
      description:
        "Digital banking, payment solutions, and financial analytics platforms",
      icon: "💳",
      projects: 25,
    },
    {
      name: "Healthcare",
      description: "Telemedicine apps and healthcare management systems",
      icon: "🏥",
      projects: 18,
    },
    {
      name: "E-commerce",
      description: "Online marketplaces and retail management solutions",
      icon: "🛍️",
      projects: 32,
    },
    {
      name: "Education",
      description: "Learning management systems and EdTech platforms",
      icon: "📚",
      projects: 20,
    },
    {
      name: "Real Estate",
      description: "Property management and virtual tour platforms",
      icon: "🏢",
      projects: 15,
    },
    {
      name: "Manufacturing",
      description: "IoT solutions and supply chain management",
      icon: "🏭",
      projects: 22,
    },
  ];

  return (
    <section className="py-24 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Tittle tittle='Industry Expertise'/>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering innovative solutions across diverse industry verticals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-purple-400/20 p-6 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 flex items-center justify-start">
                <div className="h-[200px] w-[300px] rounded-full bg-purple-500/5 blur-3xl" />
              </div>
             
              <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                {industry.icon}
              </div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{industry.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {industry.name}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">{industry.description}</p>
                <div className="flex items-center text-purple-400">
                  <span className="font-bold text-lg">
                    {industry.projects}+
                  </span>
                  <span className="ml-2">Projects Delivered</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
