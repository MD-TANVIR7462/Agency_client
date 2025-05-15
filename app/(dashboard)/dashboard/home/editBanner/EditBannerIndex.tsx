"use client";
import { Banner } from "@/components/Banner/banner";
import { Banner2 } from "@/components/Banner/Banner2";
import { EditBannerForm } from "@/components/dashboard/EditHome/EditBannerFrom";
import { TBanner } from "@/components/types/Banner";
import { useRouter } from "next/navigation";

const EditBannerIndex = ({ initialData }: { initialData: TBanner }) => {
  const router = useRouter();

  const handleUpdate = () => {
    router.refresh();

  };

  return (
    <>
      <Banner bannerData={initialData} />
      <Banner2 bannerData={initialData} />
      <EditBannerForm initialData={initialData} onUpdate={handleUpdate} />
    </>
  );
};

export default EditBannerIndex;
