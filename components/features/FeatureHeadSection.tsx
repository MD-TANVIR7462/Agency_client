"use client"
import { motion } from "framer-motion";
import Tittle from "../Shared/Tittle";

const FeatureHeadSection = () => {
   return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Tittle tittle={"Why Choose SiSCOTEK?"} />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Experience the perfect blend of innovation, expertise, and
            dedication to your success.
          </p>
        </motion.div>
   );
};

export default FeatureHeadSection;
