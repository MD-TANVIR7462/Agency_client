"use client";

import PasswordForm from "@/components/forms/PasswordForm";
import { Modal } from "@/components/Shared/Modal";
import { Pencil } from "lucide-react";
import { useState } from "react";

const PasswordChange = () => {
  const [isOpen, setisOpen] = useState(false);

  console.log(isOpen);
  return (
    <div>
      <button
        onClick={() => setisOpen(true)}
        className="gap-1 px-2 py-2 md:gap-2 md:px-4 md:py-2 bg-purple-400/10 text-purple-400 rounded-md hover:bg-purple-400/20 transition-colors text-sm md:text-base flex items-center justify-center">
        <Pencil className="h-5 w-5" /> Change Password
      </button>
      <Modal
        title="Change your password"
        onClose={() => setisOpen(false)}
        isOpen={isOpen}
        width="max-w-lg">
        <PasswordForm />
      </Modal>
    </div>
  );
};

export default PasswordChange;
