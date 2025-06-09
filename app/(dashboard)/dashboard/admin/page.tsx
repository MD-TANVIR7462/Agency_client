"use client";
import CreateAdminButton from "@/components/dashboard/admin/CreateAdminButton";
import Profile from "@/components/dashboard/admin/Profile";
import AdminList from "@/components/dashboard/admin/AdminList";
import { Modal } from "@/components/Shared/Modal";
import CreateAdminForm from "@/components/dashboard/admin/AdminForms/CreateAdminForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createData } from "@/server/ServerActions";
import { useAppSelector } from "@/redux/features/hooks";
import {
  useCurrentToken,
  useCurrentUser,
} from "@/redux/features/auth/authSlice";
import { ErrorToast, SuccessToast } from "@/lib/utils";

type Tuser = {
  email: string;
  exp: string;
  iat: string;
  role: string;
};

export default function AdminDashboard() {
  const user = useAppSelector(useCurrentUser) as Tuser;
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [reRender, setRerender] = useState(false);
  const router = useRouter();
  const token = useAppSelector(useCurrentToken);
  const handleCreateAdmin = async (data: any) => {
    try {
      const result = await createData("/auth/register", data, token as string);

      if (result?.success) {
        SuccessToast(result?.message);
        setIsCreateModalOpen(false);
        router.refresh();
        setRerender(!reRender);
      } else {
        ErrorToast(result?.message);
      }
    } catch (err) {
      ErrorToast("Something Went Wrong!");
    }

    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-0 md:p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Admin Profile</h1>
          {user && user?.role === "superadmin" && (
            <CreateAdminButton onClick={() => setIsCreateModalOpen(true)} />
          )}
        </div>

        <Profile />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Admin List</h2>
          <AdminList reRender={reRender} />
        </div>

        <Modal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title="Create New Admin">
          <CreateAdminForm onSubmit={handleCreateAdmin} />
        </Modal>
      </div>
    </div>
  );
}
