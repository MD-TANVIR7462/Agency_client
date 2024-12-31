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
    role: "admin"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="customInput"
          placeholder="Enter full name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Email
        </label>
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
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="customInput"
          placeholder="Enter password"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Role
        </label>
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
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
        >
          Create Admin
        </button>
      </div>
    </form>
  );
}