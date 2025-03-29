import React, { useState } from "react";
import { Modal } from "../Shared/Modal";
import { Position } from "../types/career";
import { ApplicationForm } from "../types/career";
import handleUploads from "@/lib/handleImgUplods";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: Position;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  position,
}) => {
  const [form, setForm] = useState<ApplicationForm>({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    resume: null,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.resume) {
      setUploadError("No file selected. Please upload a resume.");
      return;
    }

    setLoading(true);
    setUploadError(null); // Reset error state before starting

    try {
      console.log(form.resume)
      const data = await handleUploads(form.resume);

      if (!data) {
        throw new Error(data.error?.message || "Failed to upload resume.");
      }

      if (data.secure_url) {
        const resumeUrl = data.secure_url;
        console.log("Resume uploaded:", resumeUrl);

        // Update form state with the uploaded file URL
        setForm((prevForm) => ({ ...prevForm, resume: resumeUrl }));

        // Handle form submission to your backend here
        console.log("Form submitted:", { ...form, resume: resumeUrl });

        // Close the modal
        onClose();
      }
    } catch (error: any) {
      setUploadError(error.message || "Error uploading file.");
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setForm({ ...form, resume: e.target.files[0] });
      setUploadError(null); // Clear error when a file is selected
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Apply for ${position.title}`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            required
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            LinkedIn Profile
          </label>
          <input
            type="url"
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setForm({ ...form, linkedIn: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Portfolio URL
          </label>
          <input
            type="url"
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Resume *
          </label>
          <input
            type="file"
            accept=".png,.pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full bg-gray-900 border border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400 file:text-gray-950 hover:file:bg-purple-500"
          />
          {uploadError && (
            <p className="text-red-500 text-sm mt-2">{uploadError}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Uploading..." : "Submit Application"}
        </button>
      </form>
    </Modal>
  );
};
