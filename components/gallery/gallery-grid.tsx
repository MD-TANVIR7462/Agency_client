import { ExternalLink } from "lucide-react";
import Link from "next/link";
import MotionWraper from "../Shared/MotionWraper";
import { Project } from "../types/Projects";
import { getData } from "@/server/ServerActions";
export const GalleryGrid = async () => {
  const projectsData: Project[] = (await getData("project?isFeatured=true"))?.data;

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projectsData?.map((project, index) => (
        <MotionWraper
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative h-full overflow-hidden rounded-sm shadow-lg cursor-pointer"
        >
          {/* Background Image */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark Overlay: visible initially, fades out on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-100 transition-opacity duration-500 group-hover:opacity-0 z-10" />

          {/* Purple Gradient Overlay: hidden initially, fades in on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20" />

          {/* Content Wrapper */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-30">
            {/* Title & Category */}
            <div className="transform transition-all duration-500 group-hover:-translate-y-36 absolute bottom-3">
              <p className="mb-1 text-sm text-purple-300 group-hover:text-purple-200">{project.category}</p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>

            {/* Description & Link */}
            <div className="mt-4 opacity-0 translate-y-8 transition-all duration-500  group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mb-4 text-sm text-white/80 line-clamp-3">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 hover:scale-110 items-center justify-center rounded-full bg-white text-purple-600 transition hover:bg-purple-100 hover:text-purple-900"
              >
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </MotionWraper>
      ))}
    </div>
  );
};
