import React from "react";
import { TechCard } from "./tech-card";
import { TechCardProps } from "../types/TechnoloGyCardProps";

const Technologies = ({ technologyData }: { technologyData: TechCardProps[] }) => {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {technologyData?.map((tech, index) => (
        <TechCard key={index} {...tech} index={index} />
      ))}
    </div>
  );
};

export default Technologies;
