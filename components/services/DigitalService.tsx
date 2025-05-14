"use client";
import { motion } from "framer-motion";
import { ServicesGrid } from "./services-grid";
import Tittle from "../Shared/Tittle";


const DigitalService = () => {
  const { setSelectedService } = useServiceStates();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Tittle tittle={"Transformation Digital Services"} />
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Elevate your business with our comprehensive suite of digital solutions, designed to drive innovation and
          accelerate growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16"
      >
        <span className="text-start">
          <ServicesGrid onServiceClick={setSelectedService} />
        </span>
      </motion.div>
    </>
  );
};

export default DigitalService;
