"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "We analyze your needs and define project objectives.",
  },
  {
    title: "Planning",
    description: "Detailed roadmap and resource allocation.",
  },
  {
    title: "Development",
    description: "Agile development with regular updates.",
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance and optimization.",
  },
  {
    title: "Deployment",
    description: "Smooth launch and implementation.",
  },
  {
    title: "Support",
    description: "Ongoing maintenance and improvements.",
  },
];

export const ProcessTimeline = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute left-1/3 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            A systematic approach to delivering exceptional results.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/50 to-transparent" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${
                    index % 2 === 0
                      ? "justify-end lg:justify-start"
                      : "justify-start lg:justify-end"
                  }`}
                >
                  <div className="relative w-full max-w-md rounded-2xl bg-white/5 p-6 backdrop-blur-lg lg:w-1/2">
                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500" />
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
