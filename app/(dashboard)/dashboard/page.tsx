"use server";
import { StatCard } from "@/components/dashboard/stats/stat-card";
import { RevenueChart } from "@/components/dashboard/stats/revenue-chart";
import { ProjectDistribution } from "@/components/dashboard/projects/project-distribution";

import { getData } from "@/server/ServerActions";
import RecentProjects from "@/components/dashboard/projects/recent-projects";

const DashboardPage = async () => {
  const dashboardStats = (await getData("story"))?.data?.[0]?.stats;

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-2 text-white text-center">Welcome!</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {dashboardStats && <StatCard key={dashboardStats?.years} {...dashboardStats} />}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <ProjectDistribution />
      </div>

      <RecentProjects />
    </div>
  );
};

export default DashboardPage;
