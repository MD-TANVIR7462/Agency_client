import { Users, Code, Globe2 } from "lucide-react";

export const StatsSection = ({ state }: { state: any }) => {
  const stats = [
    { icon: Globe2, value: state?.years, label: "Years" },
    { icon: Code, value: state?.projects, label: "Projects" },
    { icon: Users, value: state?.teamSize, label: "Team" },
  ];

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg bg-white/5 p-4 backdrop-blur-lg justify-center"
        >
          <stat.icon className="mb-2 h-6 w-6 text-purple-500" />
          <span className="text-2xl font-bold text-white ">{stat?.value}</span>
          <span className="text-sm text-gray-300">{stat?.label}</span>
        </div>
      ))}
    </div>
  );
};
