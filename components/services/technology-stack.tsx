import Tittle from "../Shared/Tittle";
import MotionWraper from "../Shared/MotionWraper";
import Technologies from "./technologies";
import { getData } from "@/server/ServerActions";


export const TechnologyStack = async () => {
  const technologyData = (await getData("technologies?isActive=true"))?.data;

  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute left-1/3 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <MotionWraper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Tittle tittle="Technology Stack" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Cutting-edge technologies powering your digital success
          </p>
        </MotionWraper>
        <Technologies technologyData={technologyData}/>
      </div>
    </section>
  );
};
