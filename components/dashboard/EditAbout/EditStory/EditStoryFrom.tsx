import { FC } from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/components/types/ConpanyStroy';
import { Modal } from '@/components/Shared/Modal';



interface CompanyFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: CompanyInfo;
  onSubmit: (data: CompanyInfo) => void;
}

export const StoryFrom: FC<CompanyFormProps> = ({
  isOpen,
  onClose,
  initialData,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const data: CompanyInfo = {
      stats: {
        years: formData.get('years') as string,
        projects: formData.get('projects') as string,
        teamSize: formData.get('teamSize') as string,
        satisfaction: formData.get('satisfaction') as string,
      },
      story: {
        title: formData.get('storyTitle') as string,
        content: formData.get('storyContent') as string,
      },
      mission: {
        ...initialData.mission,
        title: formData.get('missionTitle') as string,
        content: formData.get('missionContent') as string,
      },
      vision: {
        ...initialData.vision,
        title: formData.get('visionTitle') as string,
        content: formData.get('visionContent') as string,
      },
    };
    
    onSubmit(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Company Information" width={"max-w-3xl"}>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Years of Experience
            </label>
            <input
              type="text"
              name="years"
              defaultValue={initialData.stats.years}
              className="customInput"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Projects Delivered
            </label>
            <input
              type="text"
              name="projects"
              defaultValue={initialData.stats.projects}
              className="customInput"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Team Size
            </label>
            <input
              type="text"
              name="teamSize"
              defaultValue={initialData.stats.teamSize}
              className="customInput"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Client Satisfaction
            </label>
            <input
              type="text"
              name="satisfaction"
              defaultValue={initialData.stats.satisfaction}
              className="customInput"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Story Title
          </label>
          <input
            type="text"
            name="storyTitle"
            defaultValue={initialData.story.title}
            className="customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Story Content
          </label>
          <textarea
            name="storyContent"
            defaultValue={initialData.story.content}
            className="customInput"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Mission Title
          </label>
          <input
            type="text"
            name="missionTitle"
            defaultValue={initialData.mission.title}
            className="customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Mission Content
          </label>
          <textarea
            name="missionContent"
            defaultValue={initialData.mission.content}
            className="customInput"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Vision Title
          </label>
          <input
            type="text"
            name="visionTitle"
            defaultValue={initialData.vision.title}
            className="customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Vision Content
          </label>
          <textarea
            name="visionContent"
            defaultValue={initialData.vision.content}
            className="customInput"
            rows={4}
            required
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <motion.button
            type="button"
            onClick={onClose}
            className="secondaryButton"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            className="primaryButton"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Save Changes
          </motion.button>
        </div>
      </motion.form>
    </Modal>
  );
};