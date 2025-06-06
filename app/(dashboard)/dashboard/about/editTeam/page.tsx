import { getData } from "@/server/ServerActions";
import EditTeamIndex from "./editTeamIndex";

const EditTeamPage = async () => {
  const teamData = (await getData("team"))?.data;
  return <>{teamData && <EditTeamIndex teamData={teamData} />}</>;
};

export default EditTeamPage;
