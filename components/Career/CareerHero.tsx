import CareerHeroButton from "../Buttons/CareerButton";

export const CareerHero = () => {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2A1B3D] to-[#1A1A2E]">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
          Join Our Innovation Journey
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Be part of a team that's shaping the future of digital transformation.
          We're looking for passionate innovators.
        </p>
        <CareerHeroButton />
      </div>
    </div>
  );
};
