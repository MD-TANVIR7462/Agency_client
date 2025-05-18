"use client";

import { Modal } from "@/components/Shared/Modal";
import { Project } from "@/components/types/Projects";
import handleUploads from "@/lib/handleImgUplods";

import { FC, useEffect, useRef, useState } from "react";

interface ProjectFormProps {
  project?: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Project>) => void;
}

export const ProjectForm: FC<ProjectFormProps> = ({ project, isOpen, onClose, onSubmit }) => {
  const [imageError, setImageError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    if (project?.image) {
      setPreviewUrl(project.image);
    }
  }, [project]);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    const file = formData.get("image");
    if (!file || !(file instanceof File)) {
      setImageError("Please select an image");
      return;
    }
    //cludinery ........
    const imgLink = await handleUploads(file);
    const data: Partial<Project> = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      isFeatured: formData.get("featured") as any,
      isActive: formData.get("status") as any,
      image: imgLink.secure_url as string,
      link: formData.get("link") as string,
      description: formData.get("description") as string,
    };
    onSubmit(data);
    setIsloading(false);
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project ? "Edit Project" : "Add New Project"}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {previewUrl && (
            <div className="mb-2">
              <img src={previewUrl} alt="Preview" className="w-28 h-28 object-cover rounded-lg" />
            </div>
          )}
          <label htmlFor="image" className="block text-sm font-medium text-purple-400 mb-1">
            Your Photo (JPG or PNG, max 5MB)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            ref={fileInputRef}
            accept="image/jpeg,image/jpg,image/png,"
            onChange={handleImageChange}
            className="w-full bg-gray-900 border cursor-pointer border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400 file:text-gray-950 hover:file:bg-purple-500"
            required
          />
          {imageError && <p className="mt-1 text-sm text-red-400">{imageError}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">Title</label>
            <input type="text" name="title" defaultValue={project?.title} className="customInput" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">Category</label>
            <select
              name="category"
              defaultValue={project?.category || ""}
              className="customInput hover:cursor-pointer"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Web Apps">Web Apps</option>
              <option value="Graphics">Graphics</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Project Link</label>
          <input type="url" name="link" defaultValue={project?.link} className="customInput" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Description</label>
          <textarea name="description" defaultValue={project?.description} rows={4} className="customInput" required />
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-purple-400">Featurd</label>
          <select
            name="featured"
            defaultValue={project?.isFeatured === true ? "Yes" : "No"}
            className="customInputNoWidth"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button type="button" onClick={onClose} className="secondaryButton">
            Cancel
          </button>
          <button type="submit" className="primaryButton">
            {project ? (!isLoading ? "Update Project" : "Updating...") : !isLoading ? "Add Project" : "Processing..."}
          </button>
        </div>
      </form>
    </Modal>
  );
};
