import { TBanner } from "@/components/types/Banner";
import { getData } from "@/server/ServerActions";
import EditBannerIndex from "./EditBannerIndex";

const EditBannerPage = async () => {
  const initialData: TBanner = (await getData("banner"))?.data[0];

  return (
    <div className="relative">
      <EditBannerIndex initialData={initialData} />
    </div>
  );
};

export default EditBannerPage;
