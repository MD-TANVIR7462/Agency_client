import { getData } from "@/server/ServerActions";
import EditServiceIndex from "./editServiceIndex";

const EditServicesPage = async () => {
  const serviceData = (await getData("service"))?.data
  console.log(serviceData)
  return (
    <>
      <EditServiceIndex serviceData={serviceData}  />
    </>
  );
};

export default EditServicesPage;
