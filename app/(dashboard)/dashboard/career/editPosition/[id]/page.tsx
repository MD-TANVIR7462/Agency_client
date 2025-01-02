import ApplicationDetails from "@/components/dashboard/EditCareer/AllApplications/ApplicationDetails";
import ApplicationsTable from "@/components/dashboard/EditCareer/AllApplications/ApplicationsTable";
import LoadingState from "@/components/dashboard/EditCareer/AllApplications/LoadingState";
import { Suspense } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ApplicationPage({ params }: PageProps) {
  
  return (
    <div className="min-h-screen text-white px-0 py-2 md:p-4 lg:p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-8">
          <Suspense fallback={<LoadingState />}>
            <ApplicationDetails id={params.id} />
            <ApplicationsTable positionId={params.id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
