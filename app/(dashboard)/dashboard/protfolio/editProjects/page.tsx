import { getData } from "@/server/ServerActions";
import EditProjectIndex from ".";

const ProjectsPage = async () => {
  const projectData = (await getData("project"))?.data;
  return (
    <>
      {
        projectData && <EditProjectIndex projectData={projectData} />
      }
    </>
  );
};

export default ProjectsPage;
