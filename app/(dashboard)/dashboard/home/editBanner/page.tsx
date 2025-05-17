import { TBanner } from "@/components/types/Banner";
import { getData } from "@/server/ServerActions";
import { Banner } from "@/components/Banner/banner";
import { Banner2 } from "@/components/Banner/Banner2";
import { EditBannerForm } from "@/components/dashboard/EditHome/EditBannerFrom";

const EditBannerPage = async () => {
  const initialData: TBanner = (await getData("banner"))?.data[0];

  return (
    <div className="relative">
      <Banner bannerData={initialData} />
      <Banner2 bannerData={initialData} />
      <EditBannerForm initialData={initialData} />
    </div>
  );
};

export default EditBannerPage;
