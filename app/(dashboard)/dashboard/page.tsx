"use client";

import { dashboardStats } from "@/lib/constants/dashboard-stats";
import { StatCard } from "@/components/dashboard/stats/stat-card";
import { RevenueChart } from "@/components/dashboard/stats/revenue-chart";
import { ProjectDistribution } from "@/components/dashboard/projects/project-distribution";
import { RecentProjects } from "@/components/dashboard/projects/recent-projects";

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-2 text-white text-center">
          Welcome!
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <StatCard key={stat.title} {...stat} index={index} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <ProjectDistribution />
      </div>

      <RecentProjects />
    </div>
  );
}
