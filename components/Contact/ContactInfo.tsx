import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Tittle from "../Shared/Tittle";



const contactInfo = [
  {
    icon: <Mail className="w-8 h-8 text-purple-400" />,
    title: "Email",
    description: "contact@SiSCOTEK.com",
  },
  {
    icon: <Phone className="w-8 h-8 text-purple-400" />,
    title: "Phone",
    description: "+1 (555) 123-4567",
  },
  {
    icon: <MapPin className="w-8 h-8 text-purple-400" />,
    title: "Address",
    description: "123 Innovation Street, Tech City, TC 12345",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gray-900 max-w-[80rem]  mx-auto px-3">

      <span className="text-center ">
        <Tittle tittle={"Get in Touch"} />
      </span>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            className="bg-[#1E1E30] rounded-xl p-6 hover:bg-[#252540] transition-all duration-300 border border-purple-900/30"
          >
            <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              {contact.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {contact.title}
            </h3>
            <p className="text-gray-400">{contact.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ContactInfo;
