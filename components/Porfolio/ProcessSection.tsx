"use client"
import React from "react";
import Tittle from "../Shared/Tittle";

const ProcessSection2 = () => {
  const processData = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your vision and requirements",
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating detailed roadmap and architecture",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with best practices",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Testing, deployment and maintenance",
    },
  ];
  return (
    <section className="py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Tittle tittle="Our Development Process" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            We follow a systematic approach to deliver exceptional results for
            every project
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processData?.map((item, index) => (
            <div key={index} className="relative p-6 bg-gray-800 rounded-lg">
              <span className="text-5xl font-bold text-purple-400/20 absolute top-4 right-4">
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection2;
