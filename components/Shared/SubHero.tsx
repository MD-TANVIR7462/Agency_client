"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SubBannerButton from "../Buttons/SubBannerButton";

const SubHero = ({
  heroTittle,
  subHeroTittle,
}: {
  heroTittle?: string;
  subHeroTittle?: string;
}) => {
  return (
    <section className="relative  sm:h-[500px] max-h-[500px]  overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
            {heroTittle ? heroTittle : ""}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            {subHeroTittle ? subHeroTittle : ""}
          </p>
          <div className="mt-8">
          <SubBannerButton/>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
    </section>
  );
};

export default SubHero;
