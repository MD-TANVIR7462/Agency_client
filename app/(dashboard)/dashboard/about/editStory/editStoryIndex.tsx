"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import { CompanyInfo } from "@/components/types/ConpanyStroy";
import { Stats } from "@/components/About/stats";
import { OurStory } from "@/components/About/our-story";
import { MissionVision } from "@/components/About/mission-vision";
import { StoryFrom } from "@/components/dashboard/EditAbout/EditStory/EditStoryFrom";
import { updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";

const EditStoryIndex = ({ companyStory }: { companyStory: CompanyInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: CompanyInfo, id: string) => {
    const result = await updateData("story/update-story", id, data);
    if (result?.success) {
      SuccessToast(result?.message);
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-0 md:p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-16"
      >
        <StoryFrom
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={companyStory}
          onSubmit={handleSubmit}
        />
        <Stats {...companyStory} />
        <OurStory {...companyStory} />
        <MissionVision {...companyStory} />
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-[4%] right-[3%] bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Pencil className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
};
export default EditStoryIndex;
