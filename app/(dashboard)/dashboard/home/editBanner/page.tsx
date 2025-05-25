import { TBanner } from "@/components/types/Banner";
import { getData } from "@/server/ServerActions";
import { Banner } from "@/components/Banner/banner";
import { Banner2 } from "@/components/Banner/Banner2";
import { EditBannerForm } from "@/components/dashboard/EditHome/EditBannerFrom";

const EditBannerPage = async () => {
  const initialData: TBanner = (await getData("banner"))?.data?.[0] || [];
  const statsData = (await getData("story"))?.data?.[0];
  return (
    <div className="relative">
      {initialData && (
        <>
          <Banner bannerData={initialData} state={statsData} />
          <Banner2 bannerData={initialData} state={statsData} />
          <EditBannerForm initialData={initialData} />
        </>
      )}
    </div>
  );
};

export default EditBannerPage;
