import { Rocket, Eye } from "lucide-react";

type MissionVisionProps = {
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
};
export function MissionVision({ mission, vision }: MissionVisionProps) {
  return (
    <section className="py-8 md:py-20 bg-gray-900 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Rocket className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">{mission?.title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">{mission?.content}</p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">{vision?.title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">{vision?.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
