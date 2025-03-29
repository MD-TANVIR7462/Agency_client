"use client";
import handleUploads from "@/lib/handleImgUplods";
import { image } from "framer-motion/client";
import { Eye, EyeOff } from "lucide-react";
import { useRef, useState } from "react";

interface CreateAdminFormProps {
  onSubmit: (data: any) => void;
}

export default function CreateAdminForm({ onSubmit }: CreateAdminFormProps) {
  const [openEye, setopenEye] = useState(false);
  const [imageError, setImageError] = useState<string>("")
  let [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    image: "",
  });

  //hangle image show with file reader ..............
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
  //end image show.....

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileformData = new FormData(e.target as HTMLFormElement);
    const file = fileformData.get("image");

    //cludinery ........
    const imgLink = await handleUploads(file);
    const img = imgLink.secure_url;
    formData.image = img;
    onSubmit(formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">Image</label>
        <div className="flex flex-col items-center gap-4">
          <img
            src={
              previewUrl ? previewUrl : "https://res.cloudinary.com/dsmbm1bvy/image/upload/v1743171752/njz3ggt18rriujpbb1sm.png"
            }
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            name="image"
            accept=".jpeg,.png,.jpg"
            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400/40 file:text-white hover:file:bg-purple-400/50  transition-colors "
          />
          {imageError && (
            <p className="mt-1 text-sm text-red-400">{imageError}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="customInput"
          placeholder="Enter full name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="customInput"
          placeholder="Enter email address"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <div className="relative">
          <input
            // type="password"
            type={openEye ? "text" : "password"}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="customInput"
            placeholder="Enter password"
          />
          {openEye ? (
            <EyeOff
              className="cursor-pointer absolute top-3 right-2 text-gray-500"
              onClick={() => setopenEye(false)}
            />
          ) : (
            <Eye
              className="absolute top-3 right-2 text-gray-500 cursor-pointer"
              onClick={() => setopenEye(true)}
            />
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Role</label>
        <select
          required
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="customInput"
        >
          <option value="" disabled>
            Select
          </option>
          <option value="admin">Admin</option>
          <option value="super_admin">Super Admin</option>
        </select>
      </div>
      <div className="pt-4">
        <button type="submit" className="primaryButton w-full">
          Create Admin
        </button>
      </div>
    </form>
  );
}
