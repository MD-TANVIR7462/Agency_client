import { getData } from "@/server/ServerActions";
import EditStoryIndex from "./editStoryIndex";

const EditStoryPage = async () => {
  const companyStory = (await getData("story"))?.data?.[0];
  return <>{companyStory && <EditStoryIndex companyStory={companyStory} />}</>;
};

export default EditStoryPage;
