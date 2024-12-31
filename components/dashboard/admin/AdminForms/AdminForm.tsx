"use client";
import { Admin } from "@/components/types/Admin";
import { FC } from "react";


interface AdminFormProps {
  admin?: Admin | null;
  onSubmit: (data: Partial<Admin>) => void;
  onClose: () => void;
}

const AdminForm: FC<AdminFormProps> = ({ admin, onSubmit, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data: Partial<Admin> = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as "admin" | "super_admin",
      department: formData.get("department") as string,
      status: formData.get("status") as "active" | "inactive",
      location: formData.get("location") as string,
      phone: formData.get("phone") as string,
    };

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={admin?.name}
            className="customInput"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Role
          </label>
          <select
            name="role"
            defaultValue={admin?.role}
            className="customInput"
            required
          >
            <option value="admin">Admin</option>
            <option value="super_admin">Super Admin</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={admin?.email}
            className="customInput"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Status
          </label>
          <select
            name="status"
            defaultValue={admin?.status}
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
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Department
          </label>
          <input
            type="text"
            name="department"
            defaultValue={admin?.department}
            className="customInput"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            defaultValue={admin?.location}
            className="customInput"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-purple-400 mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          defaultValue={admin?.phone}
          className="customInput"
          required
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-purple-400/30 text-purple-400 rounded-md hover:bg-purple-400/10"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-400/10 text-purple-400 rounded-md hover:bg-purple-400/20"
        >
          {admin ? "Update Admin" : "Add Admin"}
        </button>
      </div>
    </form>
  );
};

export default AdminForm;