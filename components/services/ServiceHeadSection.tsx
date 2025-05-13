import { motion } from "framer-motion";
import Tittle from "../Shared/Tittle";

const ServiceHeadSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Tittle tittle={"Our Services"} />
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
        Comprehensive solutions to drive your digital transformation
      </p>
    </motion.div>
  );
};

export default ServiceHeadSection;
