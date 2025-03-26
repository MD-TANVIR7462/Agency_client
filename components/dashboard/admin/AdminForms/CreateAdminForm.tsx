"use client";
import { useState } from "react";

interface CreateAdminFormProps {
  onSubmit: (data: any) => void;
}

export default function CreateAdminForm({ onSubmit }: CreateAdminFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    image:''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data =  onSubmit(formData);
    console.log(data)
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">Image</label>
        <div className="flex flex-col items-center gap-4">
          <img
            src={
              "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg"
          />

          <input
            type="file"
            accept=".jpeg,.png,.jpg"
            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400/40 file:text-white hover:file:bg-purple-400/50  transition-colors "
          />
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
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="customInput"
          placeholder="Enter password"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Role</label>
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="customInput"
        >
          <option value="admin">Admin</option>
          <option value="super_admin">Super Admin</option>
        </select>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="primaryButton w-full"
        >
          Create Admin
        </button>
      </div>
    </form>
  );
}
