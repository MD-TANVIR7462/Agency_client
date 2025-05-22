import ApplicationDetails from "@/components/dashboard/EditCareer/AllApplications/ApplicationDetails";
import ApplicationsTable from "@/components/dashboard/EditCareer/AllApplications/ApplicationsTable";
import LoadingState from "@/components/Shared/LoadingState";
import { getSingleData } from "@/server/ServerActions";
import { Suspense } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const ApplicationPage = async ({ params }: PageProps) => {
  const positionData = (await getSingleData("position", params.id))?.data;

  return (
    <div className="min-h-screen text-white px-0 py-2 md:p-4 lg:p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-8">
          <Suspense fallback={<LoadingState />}>
            {params?.id && <ApplicationDetails id={params.id} />}
            {positionData && <ApplicationsTable data={positionData} />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
