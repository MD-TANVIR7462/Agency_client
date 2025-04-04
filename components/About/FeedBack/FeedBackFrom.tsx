"use client";
import { type FormEvent, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Testimonial } from "@/components/types/Testimonial";
import { Modal } from "@/components/Shared/Modal";
import handleUploads from "@/lib/handleImgUplods";

interface TestimonialFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Testimonial>) => void;
}

export const TestimonialForm = ({
  isOpen,
  onClose,
  onSubmit,
}: TestimonialFormProps): JSX.Element => {
  const [imageError, setImageError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsloading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageError("");

    if (!file) {
      setPreviewUrl("");
      return;
    }

    // Validate file type
    if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
      setImageError("Please select a valid image file (JPG or PNG)");
      setPreviewUrl("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image size should be less than 5MB");
      setPreviewUrl("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);
    const formData = new FormData(e.currentTarget);
    const file = formData.get("image");

    if (!file || !(file instanceof File)) {
      setImageError("Please select an image");
      return;
    }
    //cludinery ........
    const imgLink = await handleUploads(file);

    const data: Partial<Testimonial> = {
      content: formData.get("content") as string,
      author: formData.get("author") as string,
      role: formData.get("role") as string,
      image: imgLink.secure_url, // In a real app, you'd upload this file to a server and get a URL
      status: "inactive",
    };

    setIsloading(false);
    onSubmit(data);
    onClose();
    setPreviewUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Submit Your Review">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-purple-400 mb-1"
          >
            Your Review
          </label>
          <textarea
            id="content"
            name="content"
            className="w-full bg-gray-900 border border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={4}
            required
            placeholder="Share your experience..."
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-purple-400 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full bg-gray-900 border border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-purple-400 mb-1"
          >
            Your Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            className="w-full bg-gray-900 border border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
            placeholder="e.g. CEO, Developer, Designer"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-purple-400 mb-1"
          >
            Your Photo (JPG or PNG, max 5MB)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            ref={fileInputRef}
            accept="image/jpeg,image/jpg,image/png,"
            onChange={handleImageChange}
            className="w-full cursor-pointer bg-gray-900 border border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400 file:text-gray-950 hover:file:bg-purple-500"
            required
          />
          {imageError && (
            <p className="mt-1 text-sm text-red-400">{imageError}</p>
          )}
          {previewUrl && (
            <div className="mt-2">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-lg"
              />
            </div>
          )}
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
           
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
              className="primaryButton  flex justify-center items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  Processing...
                </>
              ) : (
                "Submit"
              )}
        
          </motion.button>
        </div>
      </motion.form>
    </Modal>
  );
};
