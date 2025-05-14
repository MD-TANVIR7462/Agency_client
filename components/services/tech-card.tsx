import { TechCardProps } from "../types/TechnoloGyCardProps";
import { ShieldCheck } from "lucide-react";
import * as LucideIcons from "lucide-react";
import MotionWraper from "../Shared/MotionWraper";

export const TechCard = ({ icon, name, tech, gradient, index }: TechCardProps) => {
  const Icon = (LucideIcons[icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon) || LucideIcons.Shield;
  return (
    <MotionWraper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Number(index) * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-lg"
    >
      <div className={`absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r ${gradient} opacity-50`} />
      <div className={`absolute -bottom-px inset-x-0 mx-auto h-px w-3/4 bg-gradient-to-r ${gradient} opacity-50`} />

      <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${gradient} p-3`}>
        {Icon ? <Icon className="h-6 w-6 text-white" /> : <ShieldCheck className="h-6 w-6" />}
      </div>

      <h3 className="mb-3 text-lg font-semibold text-white">{name}</h3>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300">
            {item}
          </span>
        ))}
      </div>
    </MotionWraper>
  );
};
