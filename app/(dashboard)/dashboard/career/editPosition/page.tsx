import { Suspense } from "react";
import { getData } from "@/server/ServerActions";
import EditPositonIndex from "./editPositonIndex";
import LoadingState from "@/components/Shared/LoadingState";

const EditPositionPageContent = async () => {
  const positionData = (await getData("position"))?.data;
  return <>{positionData && <EditPositonIndex positions={positionData} />}</>;
};

const EditPositionPage = () => {
  return (
    <div className="min-h-screen text-white px-0 py-2 md:p-4 lg:p-6">
      <div className="max-w-[1400px] mx-auto">
        <Suspense fallback={<LoadingState />}>
          <EditPositionPageContent />
        </Suspense>
      </div>
    </div>
  );
};

export default EditPositionPage;
