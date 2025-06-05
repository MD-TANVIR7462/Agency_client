import { TAdmin } from "@/components/types/Admin";
import { FC, useState } from "react";

interface AdminFormProps {
  admin?: TAdmin | null;
  onSubmit: (data: Partial<TAdmin>) => void;
  onClose: () => void;
}

const AdminForm: FC<AdminFormProps> = ({ admin, onSubmit, onClose }) => {
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsloading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: Partial<TAdmin> = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as "admin" | "superadmin",
      isActive: formData.get("status") === "active",
      location: formData.get("location") as string,
      phone: formData.get("phone") as string,
    };
    setIsloading(false);
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Name</label>
          <input type="text" name="name" defaultValue={admin?.name} className="customInput" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Role</label>
          <select name="role" defaultValue={admin?.role} className="customInput" required>
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Email</label>
          <input type="email" name="email" defaultValue={admin?.email} className="customInput" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Status</label>
          <select
            name="status"
            defaultValue={admin?.isActive === true ? "active" : "inactive"}
            className="customInput"
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Location</label>
          <input type="text" name="location" defaultValue={admin?.location} className="customInput" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Phonedzxf</label>
          <input type="tel" name="phone" defaultValue={admin?.phone} className="customInput" required />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-purple-400/30 text-purple-400 rounded-md hover:bg-purple-400/10"
        >
          Cancel
        </button>
        <button type="submit" className="primaryButton  flex justify-center items-center gap-2" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              Updaating...
            </>
          ) : (
            "Update Admin"
          )}
        </button>
      </div>
    </form>
  );
};

export default AdminForm;
