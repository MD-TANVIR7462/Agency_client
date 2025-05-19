import { getData } from "@/server/ServerActions";
import EditContactIndex from "./editContact";

const EditContactPage = async () => {
  const contactData = (await getData("contact"))?.data?.[0];

  return <>{contactData && <EditContactIndex contactData={contactData} />}</>;
};

export default EditContactPage;
