"use client";
import React, { useState } from "react";
import { Modal } from "../Shared/Modal";
import { Position } from "../types/career";
import { ApplicationForm } from "../types/career";
import { createData } from "@/server/ServerActions";

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
    resumeLink: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const [resumePreviewUrl, setResumePreviewUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!form.fullName || !form.email || !form.phone) {
      setUploadError("Please fill in all required fields.");
      return;
    }

    if (!form.resumeLink) {
      setUploadError("Please provide your resume link.");
      return;
    }

    console.log(loading);
    setUploadError(null);

    try {
      // Prepare the complete form data to submit
      const formData = {
        ...form,
        position: position.title,
      };

      // Here you would typically send the data to your backend
      console.log("Form data ready for submission:", formData);
      const createApplication = await createData(
        "application/create-application",
        formData
      );
      console.log(createApplication);
      // Reset form and close modal on success
      setForm({
        fullName: "",
        email: "",
        phone: "",
        linkedIn: "",
        portfolio: "",
        resumeLink: "",
      });
      setResumePreviewUrl(null);
      onClose();
    } catch (error: any) {
      setUploadError(error.message || "Error submitting application.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
      console.log(loading);
    }
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, resumeLink: value });
    setUploadError(null);

    // Check if it's a valid Google Drive URL
    const urlPattern = /^(https?:\/\/)?(www\.)?drive\.google\.com\/.*$/;
    if (value && !urlPattern.test(value)) {
      setUploadError("Please provide a valid Google Drive resume link.");
    } else {
      // Generate a preview URL for Google Drive PDF
      const fileId = value.match(
        /(?:drive\.google\.com.*\/d\/)(.*?)(?:\/|$)/
      )?.[1];
      if (fileId) {
        setResumePreviewUrl(
          `https://drive.google.com/file/d/${fileId}/preview`
        );
      } else {
        setResumePreviewUrl(null);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Apply for ${position.title}`}
      width="max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-red-400">*</span>
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
            Email <span className="text-red-400">*</span>
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
            Phone <span className="text-red-400">*</span>
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
            placeholder="Your Linkedin profile link"
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.linkedIn}
            onChange={(e) => setForm({ ...form, linkedIn: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Portfolio URL
          </label>
          <input
            type="url"
            placeholder="Your protfolio link"
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.portfolio}
            onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            (Resume / CV) Link <span className="text-red-400">*</span>
            <span className="text-sm text-gray-400 block mt-1">
              Please upload your{" "}
              <strong className="text-gray-300">Resume / CV</strong> to Google
              Drive and ensure it's set to public access.
            </span>
          </label>

          <input
            type="url"
            required
            placeholder="Your Resume link"
            className="w-full  bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.resumeLink}
            onChange={handleLinkChange}
          />
          {uploadError && (
            <p className="text-red-500 text-sm mt-2">{uploadError}</p>
          )}
        </div>

        {resumePreviewUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-300 mb-2">Resume Preview:</p>
            <div className="h-96 border-2 p-1 border-purple-600 rounded-lg">
              <iframe
                src={resumePreviewUrl}
                className="w-full h-full"
                title="Resume Preview"></iframe>
            </div>
            <div className="mt-2 flex justify-between">
              <a
                href={resumePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm">
                Open in new tab
              </a>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="primaryButton  flex justify-center items-center gap-2"
          disabled={loading}>
          {loading ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              Submiting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
    </Modal>
  );
};
