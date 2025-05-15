import MotionWraper from "@/components/Shared/MotionWraper";
import { Code, ShieldCheck , Briefcase, Award } from "lucide-react";

interface StatCardProps {
  satisfaction: string;
  teamSize: string;
  projects: string;
  years: string;
  index: number;
}

export function StatCard({ satisfaction, teamSize, projects, years }: StatCardProps) {
  return (
    <>
      <MotionWraper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-xl p-6 hover:bg-gray-900/70 transition-colors"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium text-gray-100 mb-1">Total Years</p>
            <h3 className="text-2xl font-bold text-white">{years}</h3>
          </div>
          <div className={`p-3 rounded-xl`}>
            <ShieldCheck className={`w-6 h-6 text-white`} />
          </div>
        </div>
      </MotionWraper>
      <MotionWraper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-xl p-6 hover:bg-gray-900/70 transition-colors"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium text-gray-100 mb-1">Total Projects</p>
            <h3 className="text-2xl font-bold text-white">{projects}</h3>
          </div>
          <div className={`p-3 rounded-xl`}>
            <Code className={`w-6 h-6 text-purple-400 `} />
          </div>
        </div>
      </MotionWraper>
      <MotionWraper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-xl p-6 hover:bg-gray-900/70 transition-colors"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium text-gray-100 mb-1">Team Members</p>
            <h3 className="text-2xl font-bold text-white">{teamSize}</h3>
          </div>
          <div className={`p-3 rounded-xl`}>
            <Briefcase className={`w-6 h-6 text-green-500`} />
          </div>
        </div>
      </MotionWraper>
      <MotionWraper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-xl p-6 hover:bg-gray-900/70 transition-colors"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium text-gray-100 mb-1">Client Satisfaction</p>
            <h3 className="text-2xl font-bold text-white">{satisfaction}</h3>
          </div>
          <div className={`p-3 rounded-xl`}>
            <Award className={`w-6 h-6 text-yellow-500`} />
          </div>
        </div>
      </MotionWraper>
    </>
  );
}
