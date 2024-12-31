"use client";
import { useState } from "react";

import AdminTable from "./AdminTable";
import { Admin } from "@/components/types/Admin";
import { demoAdmins } from "@/lib/logIn_admin_superAdmin_utils/demo-data";
import { Modal } from "@/components/Shared/Modal";
import AdminForm from "./AdminForms/AdminForm";


export default function AdminList() {
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [admins, setAdmins] = useState<Admin[]>(demoAdmins);

  const handleEdit = (admin: Admin) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleDeleteAdmin = (admin: Admin) => {
    console.log("Viewing details for:", admin);
  };

  const handleStatusChange = (updatedAdmin: Admin) => {
    setAdmins(admins.map(admin => 
      admin.id === updatedAdmin.id ? updatedAdmin : admin
    ));
  };

  const handleSubmit = (data: Partial<Admin>) => {
    if (selectedAdmin) {
      setAdmins(admins.map(admin =>
        admin.id === selectedAdmin.id ? { ...admin, ...data } : admin
      ));
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <AdminTable
        admins={admins}
        onEdit={handleEdit}
        onDelete={handleDeleteAdmin}
        onStatusChange={handleStatusChange}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedAdmin ? "Edit Admin" : "Add New Admin"}
      >
        <AdminForm
          admin={selectedAdmin}
          onSubmit={handleSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}