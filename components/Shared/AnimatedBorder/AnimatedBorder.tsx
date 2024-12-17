import React from "react";

const AnimatedBorder = ({ position }: { position: string }) => {
  return (
    <div
      className={`absolute ${position} left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50`}
    />
  );
};

export default AnimatedBorder;
