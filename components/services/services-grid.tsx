import { ServiceCard } from "./service-card";
import { Service } from "../types/services";
import * as LucideIcons from "lucide-react";
import ServiceHeadSection from "./ServiceHeadSection";

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
  serviceData: Service[];
}

export const ServicesGrid = ({ onServiceClick, serviceData }: ServiceGridProps) => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 ">
      <div className="absolute right-1/4 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <ServiceHeadSection />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceData?.map((service) => {
            const Icon =
              (LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon) || LucideIcons.Shield; // Default to Shield if not found

            return (
              <ServiceCard
                key={service._id}
                {...service}
                icon={Icon} // Pass the icon component
                onClick={() => onServiceClick(service)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
