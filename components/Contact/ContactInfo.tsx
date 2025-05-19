import { Mail, Phone, MapPin } from "lucide-react";
import Tittle from "../Shared/Tittle";

const ContactInfo = ({ contactData }: any) => {
  return (
    <section className="py-20 bg-gray-900 max-w-[80rem] mx-auto px-3">
      <span className="text-center ">
        <Tittle tittle={"Get in Touch"} />
      </span>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#1E1E30] rounded-xl p-6 hover:bg-[#252540] transition-all duration-300 border border-purple-900/30">
          <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-purple-400" />{" "}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-gray-400">{contactData?.email}</p>
        </div>
        <div className="bg-[#1E1E30] rounded-xl p-6 hover:bg-[#252540] transition-all duration-300 border border-purple-900/30">
          <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Phone className="w-8 h-8 text-purple-400" />{" "}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
          <p className="text-gray-400">{contactData?.phone}</p>
        </div>
        <div className="bg-[#1E1E30] rounded-xl p-6 hover:bg-[#252540] transition-all duration-300 border border-purple-900/30">
          <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-purple-400" />{" "}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
          <p className="text-gray-400">{contactData?.address}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
