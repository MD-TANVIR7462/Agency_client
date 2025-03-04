"use client";
import { ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/Banner/brand-building.webp",
  "/Banner/programming-&-tech.webp",
  "/Banner/writing-&-translation.webp",
  "/Banner/digital-marketing.webp",
  "/Banner/graphics-&-design.webp",
];

function Banner3() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white ">
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative min-h-[850px] max-h-[1000px]   flex items-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900" />

          {/* Animated circles */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="max-w[1320px]  mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-sm font-semibold text-white px-4 py-1 rounded-full inline-block mb-6"
              >
                Innovative Software Solutions
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transforming Ideas into
                <div className="mt-2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Digital Reality
                  </span>
                </div>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                We craft innovative software solutions that empower businesses to thrive in the digital age. Let's build
                something extraordinary together.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-lg hover:opacity-90 transition shadow-lg shadow-blue-500/20 flex items-center group"
                >
                  Start Your Project
                  <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/10"
                >
                  View Our Work
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { number: "250+", label: "Projects Completed" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "10+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full flex items-center justify-center">
                {/* Glowing Animated Backgrounds */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-20 blur-3xl"
                />
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl"
                />

                {/* Image Slider */}
                <div className="relative  lg:w-[600px] h-[500px] lg:h-[600px] overflow-hidden rounded-2xl ">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={images[currentIndex]}
                      src={images[currentIndex]}
                      alt="Service Image"
                      className="absolute w-full h-full object-cover rounded-2xl"
                      initial={{ opacity: 0, x: 50 }} // ডান দিক থেকে আসবে
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }} // বাম দিকে চলে যাবে
                      transition={{ duration: 1.2 }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner3;
