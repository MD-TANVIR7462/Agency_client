"use client";

import { GalleryImage } from "@/components/types/Gallery";
import { useState } from "react";

interface GalleryFormProps {
  formData: Partial<GalleryImage>;
  onChange: (data: Partial<GalleryImage> | any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isEditing: boolean;
  isLoading: boolean;
}

export function GalleryForm({ formData, onChange, onSubmit, onCancel, isEditing, isLoading }: GalleryFormProps) {
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
        <label htmlFor="image" className="block text-sm font-medium text-purple-400 mb-1">
          Your Photo (JPG or PNG, max 5MB)
        </label>
        <div className="flex flex-col items-center gap-4">
          {previewUrl && <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />}
          <input
            type="file"
            name="image"
            required
            accept="image/jpeg,image/jpg,image/png"
            onChange={handleImageChange}
            className="w-full bg-gray-900 border cursor-pointer border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400 file:text-gray-950 hover:file:bg-purple-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">Caption</label>
        <input
          type="text"
          name="caption"
          value={formData.caption || ""}
          onChange={(e) => onChange({ ...formData, caption: e.target.value })}
          className="customInput"
          placeholder="Enter image caption"
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="secondaryButton">
          Cancel
        </button>
        <button type="submit" className="primaryButton">
          {isEditing ? isLoading? "Processing...":"Save" : isLoading?"Processing...":"Add Image"}
        </button>
      </div>
    </form>
  );
}
  