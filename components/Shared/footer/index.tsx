import { getData } from "@/server/ServerActions";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const Footer = async () => {
  const settingsData = (await getData("settings"))?.data?.[0];
  const contactData = (await getData("contact"))?.data?.[0];

  const links = [
    { href: "/", label: "Home" },
    {
      href: "/services",
      label: "Services",
    },
    { href: "/About", label: "About Us" },
    { href: "/Portfolio", label: "Portfolio" },
    { href: "/Career", label: "Career" },
  ];
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-start">
        <div className="h-[500px] w-[600px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end">
        <div className="h-[200px] w-[300px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
        <div className="absolute left-1/2 top-0 h-[1px] -[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
      </div>

      <div className="mx-auto max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white">
              {settingsData?.companyName ? settingsData?.companyName : "SiSCOTEK"}
            </h2>
            <p className="mt-4 text-gray-400">
              {settingsData?.tagline
                ? settingsData.tagline
                : "Transforming businesses through innovative digital solutions."}
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href={settingsData?.facebook ? settingsData.facebook : "#"}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={settingsData?.twitter ? settingsData?.twitter : "#"}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href={settingsData?.instagram ? settingsData?.instagram : "#"}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={settingsData?.linkedin ? settingsData?.linkedin : "#"}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white">Services</h3>
                <ul className="mt-4 space-y-2">
                  {[
                    "Web Development",
                    "Mobile Apps",
                    "UI/UX Design",
                    "Cloud Solutions",
                    "AI & ML",
                    "Cybersecurity",
                  ].map((service) => (
                    <li key={service}>
                      <a href="#" className="text-gray-400 transition-colors hover:text-white">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Company</h3>
                <ul className="mt-4 space-y-2">
                  {links?.map((item) => (
                    <li key={item?.label}>
                      <Link href={item?.href} className="text-gray-400 transition-colors hover:text-white">
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>{contactData ? contactData.email : "contact@SiSCOTEK.com"}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>{contactData ? contactData.phone : "Contact with Email"}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>{contactData ? contactData.address : " "}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} SiSCOTEK. All rights reserved.
          </p>
        </div>
        <div className="mt-2  border-white/10 ">
          <p className="text-center text-xs text-gray-400">
            Design and created by{" "}
            <Link
              target="_blank"
              href={"https://tanvir3.vercel.app/"}
              className="text-purple-400/90 hover:text-purple-500 transition-colors "
            >
              Tanvir
            </Link>{" "}
            ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};
