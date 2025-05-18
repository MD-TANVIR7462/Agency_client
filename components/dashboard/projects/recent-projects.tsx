import MotionWraper from "@/components/Shared/MotionWraper";
import { getData } from "@/server/ServerActions";
import { ArrowUpRight, Circle } from "lucide-react";

const RecentProjects = async () => {
  const projectData = (await getData("project"))?.data;
  return (
    <MotionWraper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-purple-400">Recent Projects</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-400/20 text-purple-400 rounded-lg hover:bg-purple-400/30 transition-colors">
          <span className="text-sm font-medium">View All</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {projectData&& projectData?.slice(0,3).map((project:any) => (
          <div
            key={project.name}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors text-white"
          >
            <div>
              <h4 className="text-sm  sm:font-medium mb-1">{project?.title}</h4>
              <p className="text-sm text-gray-400">{project?.category}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Circle className={`w-3 h-3 fill-current ${project?.isActive===true?"text-green-500":"text-red-500"}` }/>
                <span className="text-sm">{project.isActive===true? "Active" :"Inactive"}</span>
              </div>
              <div className="flex items-center gap-2">
                
                <span className="text-sm">Completed</span>
              </div>
              <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden hidden sm:block">
                <div className="h-full bg-purple-400 rounded-full" style={{ width: `100%` }} />
              </div>
              <span className="text-sm text-gray-400">100%</span>
            </div>
          </div>
        ))}
      </div>
    </MotionWraper>
  );
};
export default RecentProjects;
