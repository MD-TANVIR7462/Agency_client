"use client";

import { Suspense, useState } from "react";
import { Plus } from "lucide-react";
import { GalleryImage } from "@/components/types/Gallery";
import { galleryImages } from "@/components/data/gallery";
import { GalleryTable } from "@/components/dashboard/EditCareer/EditGallery/GalleryTable";
import { Modal } from "@/components/Shared/Modal";
import { GalleryForm } from "@/components/dashboard/EditCareer/EditGallery/GalleryForm";
import { GalleryModal } from "@/components/Career/Gallery/GalleryModal";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import LoadingState from "@/components/dashboard/EditCareer/AllApplications/LoadingState";

export default function EditGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>(galleryImages);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);

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

  const handleSave = (image: GalleryImage) => {
    if (editingImage) {
      setImages(images.map((img) => (img.id === image.id ? image : img)));
    } else {
      const newImage = {
        ...image,
        id: (images.length + 1).toString(),
      };
      setImages([...images, newImage]);
    }
    setIsFormModalOpen(false);
  };

  const handleStatusChange = (id: string, status: "active" | "inactive") => {
    setImages(
      images.map((image) => (image.id === id ? { ...image, status } : image))
    );
  };

  return (
    <div className="p-0 md:p-4 lg:p-6 ">
      <Suspense fallback={<LoadingState />}>
        <div className=" max-w-[1900px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <DashSubTitle text="Gallery" />
            <button
              onClick={handleAdd}
              className="primaryButton flex items-center"
            >
              <Plus className="md:w-5 md:h-5  w-4 h-4" />
              Add Image
            </button>
          </div>

          <GalleryTable
            images={images}
            onView={handleView}
            onEdit={handleEdit}
            onStatusChange={handleStatusChange}
          />

          <Modal
            isOpen={isFormModalOpen}
            onClose={() => setIsFormModalOpen(false)}
            title={editingImage ? "Edit Image" : "Add New Image"}
          >
            <GalleryForm
              formData={editingImage || {}}
              onChange={setEditingImage}
              onSubmit={(e) => {
                e.preventDefault();
                if (editingImage?.url && editingImage.caption) {
                  handleSave(editingImage as GalleryImage);
                }
              }}
              onCancel={() => setIsFormModalOpen(false)}
              isEditing={!!editingImage}
            />
          </Modal>

          {selectedImage && (
            <GalleryModal
              isOpen={isViewModalOpen}
              onClose={() => setIsViewModalOpen(false)}
              imageUrl={selectedImage.url}
            />
          )}
        </div>
      </Suspense>
    </div>
  );
}
