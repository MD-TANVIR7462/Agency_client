"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/logIn_admin_superAdmin_utils/auth";
import CreateAdminButton from "@/components/dashboard/admin/CreateAdminButton";
import Profile from "@/components/dashboard/admin/Profile";
import AdminList from "@/components/dashboard/admin/AdminList";
import { Modal } from "@/components/Shared/Modal";
import CreateAdminForm from "@/components/dashboard/admin/AdminForms/CreateAdminForm";


export default function AdminDashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    // if (!isAuthenticated()) {
    //   router.push("/login");
    // }
  }, [router]);

  const handleCreateAdmin = (data: any) => {
    // Handle admin creation logic here
    console.log("Creating admin:", data);
    setIsCreateModalOpen(false);
  };

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <div className="min-h-screen bg-gray-950 text-white p-0 md:p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Admin Profile</h1>
          <CreateAdminButton onClick={() => setIsCreateModalOpen(true)} />
        </div>

        <Profile />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Admin List</h2>
          <AdminList />
        </div>

        <Modal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title="Create New Admin"
        >
          <CreateAdminForm onSubmit={handleCreateAdmin} />
        </Modal>
      </div>
    </div>
  );
}