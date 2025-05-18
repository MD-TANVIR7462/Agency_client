"use client";

import { FormEvent, Suspense, useState } from "react";
import { Plus } from "lucide-react";
import { GalleryImage } from "@/components/types/Gallery";

import { GalleryTable } from "@/components/dashboard/EditCareer/EditGallery/GalleryTable";
import { Modal } from "@/components/Shared/Modal";
import { GalleryForm } from "@/components/dashboard/EditCareer/EditGallery/GalleryForm";

import DashSubTitle from "@/components/Shared/DashSubTitle";
import LoadingState from "@/components/dashboard/EditCareer/AllApplications/LoadingState";
import handleUploads from "@/lib/handleImgUplods";
import { galleryImages } from "@/components/data/gallery";
import { GalleryModal } from "@/components/Career/Gallery/GalleryModal";


export default function EditGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>(galleryImages);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsloading] = useState(false);
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

  const handleSave = async (e: FormEvent<Element>) => {
    setIsloading(true)
    setIsloading(true);
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const file = formData.get("image");
    //cludinery ........
    const imgLink = await handleUploads(file);
    const galleryData = {
      url: imgLink.secure_url as string,
      caption: formData.get("caption"),
    };
    console.log(galleryData);

    if (editingImage) {
      // !db call for the image save or edit.......
      // setImages(images.map((img) => (img.id === image.id ? image : img)));
    } else {
      const newImage = {
        // ...image,
        // id: (images.length + 1).toString(),
      };
      // setImages([...images, newImage]);
    }
    setIsloading(false)
    setIsFormModalOpen(false);
  };

  const handleStatusChange = (id: string, status: "active" | "inactive") => {
    setImages(images.map((image) => (image._id === id ? { ...image, status } : image)));
  };

  return (
    <div className="p-0 md:p-4 lg:p-6 ">
      <Suspense fallback={<LoadingState />}>
        <div className=" max-w-[1900px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <DashSubTitle text="Gallery" />
            <button onClick={handleAdd} className="primaryButton flex items-center">
              <Plus className="md:w-5 md:h-5  w-4 h-4" />
              Add Image
            </button>
          </div>

          <GalleryTable images={images} onView={handleView} onEdit={handleEdit} onStatusChange={handleStatusChange} />

          <Modal
            isOpen={isFormModalOpen}
            onClose={() => setIsFormModalOpen(false)}
            title={editingImage ? "Edit Image" : "Add New Image"}
          >
            <GalleryForm
              formData={editingImage || {}}
              onChange={setEditingImage}
              onSubmit={(e) => {
                handleSave(e);
              }}
              onCancel={() => setIsFormModalOpen(false)}
              isEditing={!!editingImage}
              isLoading={isLoading}
            />
          </Modal>

          {selectedImage && (
            <div className="max-w-4xl boder border-red-600">
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
