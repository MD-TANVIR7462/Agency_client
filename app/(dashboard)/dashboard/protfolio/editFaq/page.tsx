import { getData } from "@/server/ServerActions";
import EditFAQindex from ".";

const FAQPage = async () => {
  const faqData = (await getData("faq"))?.data;
  return <>{faqData && <EditFAQindex faqs={faqData} />}</>;
};

export default FAQPage;
