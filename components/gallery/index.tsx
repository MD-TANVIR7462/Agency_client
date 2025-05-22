import MotionWraper from "../Shared/MotionWraper";
import Tittle from "../Shared/Tittle";
import { GalleryGrid } from "./gallery-grid";

export const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute left-1/2 top-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <MotionWraper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center">
          <Tittle tittle={"Latest Projects"} />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Explore our portfolio of successful digital transformations and
            innovative solutions.
          </p>
        </MotionWraper>

        <MotionWraper
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16">
          <GalleryGrid />
        </MotionWraper>
      </div>
    </section>
  );
};
