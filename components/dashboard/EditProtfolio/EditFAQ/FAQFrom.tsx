import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/Shared/Modal";
import { FAQ } from "@/components/types/Faq";

interface FaqFormProps {
  faq?: FAQ | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<FAQ>, id?: string) => void;
}

export const FAQForm: FC<FaqFormProps> = ({
  faq,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data: Partial<FAQ> = {
      question: formData.get("question") as string,
      answer: formData.get("answer") as string,
    };

    let id;
    if (faq) {
      id = faq._id;
    }

    try {
      onSubmit(data, id);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={faq ? "Edit FAQ" : "Add FAQ"}>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
        onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            question
          </label>
          <input
            type="text"
            name="question"
            defaultValue={faq?.question}
            className="customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Answer
          </label>
          <textarea
            name="answer"
            defaultValue={faq?.answer}
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
            whileTap={{ scale: 0.98 }}>
            Cancel
          </motion.button>

          <button
            type="submit"
            className={
              "px-4 py-2 rounded-md flex items-center justify-center gap-2 bg-purple-400/10 text-purple-400 hover:bg-purple-400/20 transition-colors min-w-[120px]"
            }
            disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>
                Processing...
              </>
            ) : faq ? (
              "Update FAQ"
            ) : (
              "Add FAQ"
            )}
          </button>
        </div>
      </motion.form>
    </Modal>
  );
};
