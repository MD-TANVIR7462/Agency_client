"use client";
import { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import { Modal } from "@/components/Shared/Modal";
import AdminForm from "./AdminForms/AdminForm";
import { TAdmin } from "@/components/types/Admin";
import { deleteData, getData, updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/features/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import LoadingState from "@/components/Shared/LoadingState";
import { deleteToast } from "@/lib/deleteToast";

export default function AdminList({reRender}:{reRender:boolean}) {
  const token = useAppSelector(useCurrentToken);
  const router = useRouter();
  const [adminData, setData] = useState<TAdmin[] | null>(null);
  const [loading, setLoading] = useState(true); // For initial loading only
  const [selectedAdmin, setSelectedAdmin] = useState<TAdmin | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch admin data
  const fetchAdmin = async (suppressLoading = false) => {
    console.log("FechAdmins")
    try {
      if (!suppressLoading) setLoading(true);
      const data = await getData("/auth/register/all", token as string);
      setData(data.data);
    } catch (error) {
      ErrorToast("You are Unauthorized!");
    } finally {
      if (!suppressLoading) setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, [token,reRender]);


  
  // Handlers
  const handleEdit = (admin: TAdmin) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleDeleteAdmin = async (id: string) => {
    const handleDeleteService = async () => {
      const result = await deleteData("auth/register/delete-user", id, token as string);
      if (result?.success) {
        SuccessToast(result.message);
        router.refresh();
        await fetchAdmin(true);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(handleDeleteService, "Delete this service ?");
  };

  const handleStatusChange = async (id: string, status: "active" | "inactive") => {
    const isActive = status === "active";
    const data = { isActive };

    const result = await updateData("auth/register/update-user", id, data, token as string);
    if (result.success) {
      SuccessToast("Status Updated Successfully!");
      router.refresh();
      await fetchAdmin(true);
    } else {
      ErrorToast(result?.message || "Something went wrong!");
    }
  };

  const handleSubmit = async (data: Partial<TAdmin>) => {
    const result = await updateData("auth/register/update-user", selectedAdmin?._id as string, data, token as string);
    if (result?.success) {
      SuccessToast(result?.message);
      setSelectedAdmin(null);
      setIsModalOpen(false);
      await fetchAdmin(true);
    } else {
      ErrorToast(result?.message);
    }
  };

  // Conditional UI
  if (loading) {
    return <LoadingState />;
  }

  if (!adminData || adminData.length === 0) {
    return <div className="text-center py-8 text-gray-400">No admin users found.</div>;
  }

  return (
    <>
      <AdminTable
        admins={adminData}
        onEdit={handleEdit}
        onDelete={handleDeleteAdmin}
        onStatusChange={handleStatusChange}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedAdmin ? "Edit Admin" : "Add New Admin"}
      >
        <AdminForm admin={selectedAdmin} onSubmit={handleSubmit} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
