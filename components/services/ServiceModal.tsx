

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import { Service } from "../types/services";
import * as LucideIcons from "lucide-react";

interface ServiceModalProps {
  service: Service | null;
  isOpen?: true | false;
  onClose: () => void;
}

export function ServiceModal({ service, onClose, isOpen = true }: ServiceModalProps) {
  if (!service) return null;
  if (!isOpen) return null;

  const Icon = (LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon) || LucideIcons.Shield;

  return (
    <Dialog open={!!service} onOpenChange={() => onClose()}>
      <DialogContent className="w-[94%] max-w-3xl   rounded-lg  max-h-[90vh] overflow-y-auto border-purple-400/20 bg-gradient-to-b from-gray-800 to-gray-900 p-0 mx-auto">
        <div className="relative p-6 sm:p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute  right-4 outline-none top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-purple-400/10 hover:text-purple-400"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
              {Icon ? <Icon className="h-8 w-8" /> : <ShieldCheck className="h-8 w-8" />}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              <p className="mt-2 text-lg text-purple-300">{service.shortDes}</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">{service.fullDescription}</p>
            </div>

            {/* Features */}
            {service.features && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Key Features</h3>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="h-2 w-2 rounded-full bg-purple-400" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {service.technologies && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-1.5 text-sm font-medium text-purple-400 transition-colors hover:bg-purple-400/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
