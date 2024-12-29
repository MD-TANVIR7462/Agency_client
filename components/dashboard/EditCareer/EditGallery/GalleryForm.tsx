"use client";

import { GalleryImage } from "@/components/types/Gallery";
import { useState } from "react";

interface GalleryFormProps {
  formData: Partial<GalleryImage>;
  onChange: (data: Partial<GalleryImage> | any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isEditing: boolean;
}

export function GalleryForm({
  formData,
  onChange,
  onSubmit,
  onCancel,
  isEditing,
}: GalleryFormProps) {
  const [previewUrl, setPreviewUrl] = useState(formData.url || "");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        setPreviewUrl(url);
        onChange({ ...formData, url });
      };
      reader.readAsDataURL(file);

   
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">Image</label>
        <div className="flex flex-col items-center gap-4">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg"
            />
          )}
          <input
            type="file"
               accept="image/jpeg,image/jpg,image/png"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400/40 file:text-white hover:file:bg-purple-400/50  transition-colors "
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">
          Caption
        </label>
        <input
          type="text"
          value={formData.caption || ""}
          onChange={(e) => onChange({ ...formData, caption: e.target.value })}
          className="customInput"
          placeholder="Enter image caption"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium text-gray-200">Status</label>
        <select
          value={formData.status || "active"}
          onChange={(e) =>
            onChange({
              ...formData,
              status: e.target.value as "active" | "inactive",
            })
          }
          className="bg-gray-800 border border-gray-700 rounded-md text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="secondaryButton"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="primaryButton"
        >
          {isEditing ? "Save Changes" : "Add Image"}
        </button>
      </div>
    </form>
  );
}
