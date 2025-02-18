"use client";
import ScrollOnPosition from "../ScrollButton/ScrollOnPosition";

const CareerHeroButton = () => {
  const handleScrollToPosition = (position: number) => {
    ScrollOnPosition(position);
  };
  return (
    <button
      onClick={() => handleScrollToPosition(350)}
      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
    >
      View Open Positions
    </button>
  );
};

export default CareerHeroButton;
