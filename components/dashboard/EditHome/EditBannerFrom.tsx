"use client";
import { FC, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import { Modal } from "@/components/Shared/Modal";
import handleUploads from "@/lib/handleImgUplods";
import { updateData } from "@/server/ServerActions";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/lib/utils";

interface BannerData {
  title1?: string;
  title2?: string;
  subtext?: string;
  activeBanner?: number;
  img_url?: string;
  _id?: string;
}

interface EditBannerFormProps {
  initialData?: BannerData;
}

export const EditBannerForm: FC<EditBannerFormProps> = ({ initialData }) => {
  const [bannerActive, setBannerActive] = useState(initialData?.activeBanner);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<BannerData>(
    initialData || { title1: "", title2: "", subtext: "", img_url: "" }
  );
  const [imageError, setImageError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>(initialData?.img_url || "");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBannerUpdate = async (data: BannerData) => {
    const { title1, title2, subtext, img_url, _id } = data;
    const id = _id;
    const updatedData = {
      title1,
      title2,
      subtext,
      img_url,
      activeBanner: bannerActive,
    };
    const result = await updateData("banner/update-banner", id as string, updatedData);
    if (result.success) {
      router.refresh();
      SuccessToast(result?.message);
    } else {
      ErrorToast(result?.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageError("");

    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
      setImageError("Please select a valid image file (JPG or PNG)");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image size should be less than 5MB");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Preview image
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let img_url = formData.img_url;
      const file = fileInputRef.current?.files?.[0];

      if (file) {
        const imgLink = await handleUploads(file);
        if (!imgLink?.secure_url) throw new Error("Image upload failed");
        img_url = imgLink.secure_url;
      }

      handleBannerUpdate({ ...formData, img_url });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setImageError("Image upload failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onStatusChange = (id: string, activeNumber: number) => {
    setBannerActive(activeNumber as number);
  };
  return (
    <>
      {/* Edit Button */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        className="z-20 fixed bottom-[4%] right-[3%] bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        title="Edit Banner"
      >
        <Pencil size={24} />
      </motion.button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Edit Banner">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Title Inputs */}
          {/* Image Upload */}
          <div>
            {previewUrl && <img src={previewUrl} alt="Preview" className="mb-5 w-[50%] h-40 object-cover rounded-lg" />}
            <label className="block text-sm font-medium text-white mb-1">Image (JPG or PNG, max 5MB)</label>
            <input
              type="file"
              name="image"
              ref={fileInputRef}
              accept="image/jpeg,image/png"
              onChange={handleImageChange}
              className="w-full bg-gray-900  border cursor-pointer border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400 file:text-gray-950 hover:file:bg-purple-500"
            />
            {imageError && <p className="text-red-500 text-sm">{imageError}</p>}
          </div>
          <input
            type="text"
            name="title1"
            value={formData.title1}
            onChange={handleChange}
            placeholder="Title 1"
            className="customInput"
            maxLength={17}
            required
          />
          <input
            type="text"
            name="title2"
            value={formData.title2}
            onChange={handleChange}
            placeholder="Title 2"
            className="customInput"
            maxLength={17}
            required
          />
          <textarea
            name="subtext"
            value={formData.subtext}
            onChange={handleChange}
            placeholder="Subtext"
            className="customInput"
            maxLength={190}
            rows={3}
            required
          />

          <select
            className="bg-gray-900/80 cursor-pointer text-white border border-purple-400/40 rounded-md px-2 py-2"
            onChange={(e) => {
              const value = parseInt(e.target.value) as 1 | 2;
              setFormData((prev) => ({ ...prev, activeBanner: value }));
              if (initialData?._id) {
                onStatusChange(initialData._id, Number(e.target.value));
              }
            }}
            value={formData.activeBanner?.toString() || bannerActive}
          >
            <option value="1">Banner 1</option>
            <option value="2">Banner 2</option>
          </select>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <motion.button
              type="button"
              onClick={() => setIsModalOpen(false)}
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
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </motion.button>
          </div>
        </motion.form>
      </Modal>
    </>
  );
};
