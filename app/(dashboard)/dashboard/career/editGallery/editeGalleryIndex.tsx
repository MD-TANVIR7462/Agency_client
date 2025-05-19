"use client";

import { FormEvent, Suspense, useState } from "react";
import { Plus } from "lucide-react";
import { GalleryImage } from "@/components/types/Gallery";

import { GalleryTable } from "@/components/dashboard/EditCareer/EditGallery/GalleryTable";
import { Modal } from "@/components/Shared/Modal";
import { GalleryForm } from "@/components/dashboard/EditCareer/EditGallery/GalleryForm";

import DashSubTitle from "@/components/Shared/DashSubTitle";
import LoadingState from "@/components/Shared/LoadingState";
import handleUploads from "@/lib/handleImgUplods";

import { GalleryModal } from "@/components/Career/Gallery/GalleryModal";
import { createData, updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function EditeGalleryIndex({ galleryData: images }: { galleryData: GalleryImage[] }) {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    setEditingImage(null); 
    setIsFormModalOpen(true);
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setIsFormModalOpen(true);
  };

  const handleView = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsViewModalOpen(true);
  };

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const file = formData.get("image") as File | null;
      const caption = formData.get("caption")?.toString().trim() || "";

      let imageUrl = editingImage?.url || "";

      if (file && file.size > 0) {
        const uploaded = await handleUploads(file);
        if (!uploaded?.secure_url) {
          throw new Error("Image upload failed. Please try again.");
        }
        imageUrl = uploaded.secure_url;
      }

      if (!imageUrl) {
        ErrorToast("Image is required.");
        return;
      }

      const payload = { url: imageUrl, caption };

      const result = editingImage?._id
        ? await updateData("gallery/update-gallery", editingImage._id, payload)
        : await createData("gallery/create-gallery", payload as GalleryImage);
      if (result?.success) {
        SuccessToast(result.message || "Operation successful.");
        router.refresh();
        setIsFormModalOpen(false);
        setEditingImage(null);
      } else {
        throw new Error(result?.message || "Operation failed.");
      }
    } catch (error: any) {
      console.error("Error during save:", error);
      ErrorToast(error.message || "Unexpected error occurred.");
    } finally {
      setIsloading(false);
    }
  };

  const handleStatusChange = async (id: string, status: "active" | "inactive") => {
    const result = await updateData("gallery/update-gallery", id, { isActive: status === "active" });
    if (result?.success) {
      SuccessToast("Status updated successfully!");
      router.refresh();
    } else {
      ErrorToast(result?.message || "Failed to update status.");
    }
  };

  return (
    <div className="p-0 md:p-4 lg:p-6">
      <Suspense fallback={<LoadingState />}>
        <div className="max-w-[1900px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <DashSubTitle text="Gallery" />
            <button onClick={handleAdd} className="primaryButton flex items-center">
              <Plus className="md:w-5 md:h-5 w-4 h-4 mr-1" />
              Add Image
            </button>
          </div>

          <GalleryTable images={images} onView={handleView} onEdit={handleEdit} onStatusChange={handleStatusChange} />

          <Modal
            isOpen={isFormModalOpen}
            onClose={() => {
              setIsFormModalOpen(false);
              setEditingImage(null);
            }}
            title={editingImage ? "Edit Image" : "Add New Image"}
          >
            <GalleryForm
              formData={editingImage as GalleryImage}
              onChange={setEditingImage}
              onSubmit={handleSave}
              onCancel={() => {
                setIsFormModalOpen(false);
                setEditingImage(null);
              }}
              isEditing={!!editingImage}
              isLoading={isLoading}
            />
          </Modal>

          {selectedImage && (
            <div className="max-w-4xl">
              <GalleryModal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                imageUrl={selectedImage.url}
              />
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
}
