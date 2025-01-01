import { Briefcase, MapPin, Clock } from "lucide-react";
import { positions } from "@/components/data/positions";


interface ApplicationDetailsProps {
  id: string;
}

export default async function ApplicationDetails({
  id,
}: ApplicationDetailsProps) {
  const position = positions.find((pos) => pos.id === id);

  if (!position) return null;

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-gray-800/50 shadow-xl hover:border-purple-500/30 transition-all duration-300 sticky ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center  gap-3">
            <h3 className="text-2xl font-semibold">{position.title}</h3>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                position.status === "active"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {position.status}
            </span>
          </div>
      
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm mt-3">
            <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
              <Briefcase className="w-4 h-4" />
              <span>{position.department}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
              <MapPin className="w-4 h-4" />
              <span>{position.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4" />
              <span>{position.type}</span>
            </div>
          </div>
        </div>

      </div>
      {/* <ApplicationsTable positionId={id} /> */}
    </div>
  );
}
