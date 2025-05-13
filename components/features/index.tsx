import { FeaturesGrid } from "./features-grid";
import { FeatureShowcase } from "./feature-showcase";
import FeatureHeadSection from "./FeatureHeadSection";

export const Features = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute right-1/3 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <FeatureHeadSection />
        <div className="mt-16 space-y-24">
          <FeaturesGrid />
          <FeatureShowcase />
        </div>
      </div>
    </section>
  );
};
