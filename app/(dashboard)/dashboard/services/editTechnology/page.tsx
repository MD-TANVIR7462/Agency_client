import { getData } from "@/server/ServerActions";
import EditTechnologyIndex from "./editTechnologyIndex";

const TechnologyPage = async () => {
  const technologyData = (await getData("technologies"))?.data;
  return (
    <>
      <EditTechnologyIndex technologyData={technologyData} />
    </>
  );
};

export default TechnologyPage;
