"use client";

import { GalleryImage } from "@/components/types/Gallery";
import { Eye, Edit } from "lucide-react";


interface GalleryTableProps {
  images: GalleryImage[];
  onView: (image: GalleryImage) => void;
  onEdit: (image: GalleryImage) => void;
  onStatusChange: (id: string, status: 'active' | 'inactive') => void;
}

export function GalleryTable({ images, onView, onEdit, onStatusChange }: GalleryTableProps) {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Image</th>
            <th className="p-4 text-left text-purple-400">Caption</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/10">
          {images.map((image) => (
            <tr key={image.id} className="hover:bg-purple-400/5 transition-colors duration-150">
              <td className="p-4">
                <img src={image.url} alt={image.caption} className="w-12 h-12 object-cover rounded-lg" />
              </td>
              <td className="p-4 text-white truncate">{image.caption}</td>
              <td className="p-4">
                <select
                  className="bg-gray-900 text-white border border-purple-400/40 rounded px-2 py-1"
                  value={image.status}
                  onChange={(e) => onStatusChange(image.id, e.target.value as 'active' | 'inactive')}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onView(image)}
                    className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
                    title="View Image"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onEdit(image)}
                    className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
                    title="Edit Image"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}