
import { HeroImage } from "@/components/ui/hero-image";
import { StatsSection } from "@/components/ui/stats-section";
import BannerButton from "./Buttons/BannerButton";

export const Banner = () => {
  

  return (
    <div className="relative max-h-[1200px]  overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <div className="relative z-10 mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[900px] lg:min-h-[1000px] max-h-[1200px] items-center py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-purple-500/10 blur-xl" />
                <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-blue-500/10 blur-xl" />

                <h1 className="relative text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                  Transform Your
                  <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Digital Vision
                  </span>
                </h1>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                We're not just developers; we're digital architects crafting the
                future. Our team transforms complex challenges into elegant
                solutions that drive your business forward.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
           <BannerButton/>
                <button className= "rounded-full md:rounded-lg  border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-lg transition-all hover:bg-white/10">
                  View Portfolio
                </button>
              </div>

              <StatsSection />
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:block">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute left-1/2 top-0 h-[1px] w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
    </div>
  );
};
