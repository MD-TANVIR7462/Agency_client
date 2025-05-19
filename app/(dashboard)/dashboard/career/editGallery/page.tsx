import { getData } from "@/server/ServerActions";
import EditeGalleryIndex from "./editeGalleryIndex";

const EditGalleryPage = async () => {
  const galleryData = (await getData("gallery"))?.data;
  return <>{galleryData && <EditeGalleryIndex galleryData={galleryData} />}</>;
};

export default EditGalleryPage;
