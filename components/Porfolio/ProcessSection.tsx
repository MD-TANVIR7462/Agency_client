"use client";

import React, { useState } from "react";
import { Search, Lightbulb, PenTool, Code, CheckCircle, Repeat } from "lucide-react";
import Tittle from "../Shared/Tittle";
import { motion, AnimatePresence } from "framer-motion";

const ProcessSection2 = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Discovery",
      description:
        "We thoroughly analyze your business requirements, target audience, and market positioning to define project scope and objectives.",
      details: [
        "Requirement gathering sessions",
        "Competitive analysis",
        "User persona development",
        "Business goal alignment",
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategy & Planning",
      description:
        "Our team creates a comprehensive roadmap with timelines, resource allocation, and technical specifications.",
      details: [
        "Project timeline development",
        "Technical stack selection",
        "Resource allocation planning",
        "Risk assessment",
      ],
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Design",
      description:
        "We create intuitive, user-centric designs that align with your brand identity and business objectives.",
      details: ["UI/UX wireframing", "Interactive prototyping", "Visual design creation", "Design system development"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description:
        "Our engineers build robust, scalable solutions following industry best practices and coding standards.",
      details: [
        "Agile development methodology",
        "Regular code reviews",
        "Continuous integration",
        "Progress tracking and reporting",
      ],
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Testing & QA",
      description:
        "Rigorous testing ensures your product meets the highest standards of quality, performance, and security.",
      details: ["Functional testing", "Performance optimization", "Security auditing", "Cross-browser/device testing"],
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: "Deployment & Maintenance",
      description:
        "We handle smooth deployment and provide ongoing support to ensure your solution evolves with your business.",
      details: [
        "Deployment automation",
        "Performance monitoring",
        "Regular updates and improvements",
        "Technical support",
      ],
    },
  ];

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black/30 to-black" />
        <div className="absolute w-72 h-72 bg-purple-600/30 top-10 left-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-72 h-72 bg-indigo-500/30 bottom-10 right-10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Tittle tittle="Our Development Process" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We follow a proven methodology that ensures successful project delivery with transparency at every stage.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 ">
          {/* Sidebar */}
          <div className="lg:w-1/3 bg-gray-600/20 p-2 rounded-lg">
              <div className="absolute bottom-10 left-14 w-72 h-72 bg-purple-900/30 rounded-full blur-3xl" />
            <div className="sticky top-24 space-y-3">

              {steps.map((step, index) => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  key={index}
                  className={`w-full text-left px-6 py-4 rounded-xl flex items-center transition duration-300 group ${
                    activeStep === index
                      ? "bg-gradient-to-r from-purple-700/30 to-indigo-700/20 border-l-4 border-purple-400 shadow-lg"
                      : "hover:bg-gray-800/50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`mr-4 transition duration-300 ${
                      activeStep === index ? "text-purple-400 scale-110" : "text-gray-400 group-hover:text-purple-300"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold ${activeStep === index ? "text-white" : "text-gray-300"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${activeStep === index ? "text-purple-300" : "text-gray-400"}`}>
                      Step {index + 1}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3  ">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-600/20 to-gray-800/20 backdrop-blur-md rounded-lg p-8 shadow-xl relative overflow-hidden "
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-800/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl" />

              <div className="relative z-10 ">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mr-4 text-purple-400">
                    {steps[activeStep].icon}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    {steps[activeStep].title}
                  </h3>
                </div>

                <p className="text-gray-300 text-lg mb-6">{steps[activeStep].description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  {steps[activeStep].details.map((detail, index) => (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      key={index}
                      className="bg-gray-700/60 p-4 rounded-xl flex items-start transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 mr-3 font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-gray-100">{detail}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 flex justify-between">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                      activeStep === 0 ? "text-gray-500 cursor-not-allowed" : "secondaryButton"
                    }`}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                  >
                    Previous Step
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                      activeStep === steps.length - 1 ? "text-gray-500 cursor-not-allowed" : " secondaryButton"
                    }`}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeStep === steps.length - 1}
                  >
                    Next Step
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection2;
