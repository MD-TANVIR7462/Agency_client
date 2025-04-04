// import React, { useState, useEffect } from "react";
// import { Modal } from "../Shared/Modal";
// import { Position } from "../types/career";
// import { ApplicationForm } from "../types/career";

// interface ApplicationModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   position: Position;
// }

// export const ApplicationModal: React.FC<ApplicationModalProps> = ({
//   isOpen,
//   onClose,
//   position,
// }) => {
//   const [form, setForm] = useState<ApplicationForm>({
//     fullName: "",
//     email: "",
//     phone: "",
//     linkedIn: "",
//     portfolio: "",
//     resume: null,
//   });

//   const [loading, setLoading] = useState<boolean>(false);
//   const [uploadError, setUploadError] = useState<string | null>(null);
//   const [resumePreviewUrl, setResumePreviewUrl] = useState<string | null>(null);
//   const [cloudinaryUrl, setCloudinaryUrl] = useState<string | null>(null);

//   // Clean up object URLs when component unmounts
//   useEffect(() => {
//     return () => {
//       if (resumePreviewUrl) {
//         URL.revokeObjectURL(resumePreviewUrl);
//       }
//     };
//   }, [resumePreviewUrl]);

//   const handleFileUpload = async (file: File) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append(
//       "upload_preset",
//       process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
//     );
//     formData.append("folder", "Siscotek_CV");

//     try {
//       // Always use 'image' upload for PDFs to get proper preview URLs
//       const resourceType = file.type === "application/pdf" ? "image" : "raw";
//       const cloudinaryURL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;

//       const response = await fetch(cloudinaryURL, {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`Upload failed with status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Cloudinary response:", data);

//       if (data.secure_url) {
//         // For PDFs, modify URL to force download if needed
//         if (file.type === "application/pdf") {
//           const previewUrl = data.secure_url.replace('/upload/', '/upload/q_auto,f_auto/');
//           setCloudinaryUrl(data.secure_url); // Store original URL
//           return previewUrl;
//         }
//         return data.secure_url;
//       } else {
//         throw new Error("Failed to get secure URL from response.");
//       }
//     } catch (error: any) {
//       console.error("File upload error:", error);
//       throw new Error("File upload failed. Please try again.");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.fullName || !form.email || !form.phone) {
//       setUploadError("Please fill in all required fields.");
//       return;
//     }

//     if (!form.resume) {
//       setUploadError("Please upload your resume.");
//       return;
//     }

//     setLoading(true);
//     setUploadError(null);

//     try {
//       const resumeUrl = await handleFileUpload(form.resume);
//       if (!resumeUrl) {
//         throw new Error("Resume upload failed.");
//       }

//       // Prepare the complete form data to submit
//       const formData = {
//         ...form,
//         resume: cloudinaryUrl || resumeUrl, // Use original URL for backend
//         position: position.title,
//       };

//       // Here you would typically send the data to your backend
//       console.log("Form data ready for submission:", formData);

//       // Reset form and close modal on success
//       setForm({
//         fullName: "",
//         email: "",
//         phone: "",
//         linkedIn: "",
//         portfolio: "",
//         resume: null,
//       });
//       setResumePreviewUrl(null);
//       setCloudinaryUrl(null);
//       onClose();
//     } catch (error: any) {
//       setUploadError(error.message || "Error submitting application.");
//       console.error("Submission error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       const file = e.target.files[0];
      
//       // Validate file type
//       const validTypes = [
//         "application/pdf",
//         "application/msword",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//         "image/png",
//       ];
      
//       if (!validTypes.includes(file.type)) {
//         setUploadError("Invalid file type. Please upload PDF, DOC, DOCX, or PNG.");
//         return;
//       }

//       // Validate file size (5MB max)
//       if (file.size > 5 * 1024 * 1024) {
//         setUploadError("File size too large. Maximum 5MB allowed.");
//         return;
//       }

//       setForm({ ...form, resume: file });
//       setUploadError(null);
//       setCloudinaryUrl(null);

//       // Create preview URL for PDFs and images
//       if (file.type === "application/pdf" || file.type.startsWith("image/")) {
//         // Revoke previous URL if exists
//         if (resumePreviewUrl) {
//           URL.revokeObjectURL(resumePreviewUrl);
//         }
//         setResumePreviewUrl(URL.createObjectURL(file));
//       } else {
//         setResumePreviewUrl(null);
//       }
//     }
//   };

//   // Google Docs Viewer URL for PDF preview
//   const getPdfPreviewUrl = () => {
//     if (!cloudinaryUrl) return "";
//     return `https://docs.google.com/gview?url=${encodeURIComponent(cloudinaryUrl)}&embedded=true`;
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       title={`Apply for ${position.title}`}
//     >
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             required
//             className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             value={form.fullName}
//             onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Email *
//           </label>
//           <input
//             type="email"
//             required
//             className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Phone *
//           </label>
//           <input
//             type="tel"
//             required
//             className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             LinkedIn Profile
//           </label>
//           <input
//             type="url"
//             className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             value={form.linkedIn}
//             onChange={(e) => setForm({ ...form, linkedIn: e.target.value })}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Portfolio URL
//           </label>
//           <input
//             type="url"
//             className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             value={form.portfolio}
//             onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Resume * (PDF, DOC, DOCX, PNG)
//           </label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx,.png"
//             required
//             onChange={handleFileChange}
//             className="w-full bg-gray-900 border border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400 file:text-gray-950 hover:file:bg-purple-500"
//           />
//           {uploadError && (
//             <p className="text-red-500 text-sm mt-2">{uploadError}</p>
//           )}
//           {form.resume && !uploadError && (
//             <p className="text-green-500 text-sm mt-2">
//               {form.resume.name} selected ({Math.round(form.resume.size / 1024)} KB)
//             </p>
//           )}
//         </div>

//         {form.resume?.type === "application/pdf" && (
//           <div className="mt-4">
//             <p className="text-sm text-gray-300 mb-2">Resume Preview:</p>
//             {cloudinaryUrl ? (
//               <div className="h-96 border-2 border-purple-600 rounded-lg">
//                 <iframe
//                   src={getPdfPreviewUrl()}
//                   width="100%"
//                   height="100%"
//                   className="border-0 rounded-lg"
//                   frameBorder="0"
//                 >
//                   <p className="text-red-500 p-4">
//                     Your browser doesn't support PDF previews.{" "}
//                     <a
//                       href={cloudinaryUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-purple-400"
//                     >
//                       Download instead
//                     </a>
//                   </p>
//                 </iframe>
//               </div>
//             ) : resumePreviewUrl ? (
//               <div className="h-96 border-2 border-purple-600 rounded-lg flex items-center justify-center bg-gray-800">
//                 <p className="text-gray-300">
//                   Preview will be available after upload
//                 </p>
//               </div>
//             ) : null}
//             <div className="mt-2 flex justify-between">
//               <button
//                 type="button"
//                 onClick={() => window.open(resumePreviewUrl || cloudinaryUrl || "#", "_blank")}
//                 className="text-purple-400 hover:text-purple-300 text-sm"
//                 disabled={!resumePreviewUrl && !cloudinaryUrl}
//               >
//                 Open in new tab
//               </button>
//               {cloudinaryUrl && (
//                 <a
//                   href={cloudinaryUrl}
//                   download
//                   className="text-purple-400 hover:text-purple-300 text-sm"
//                 >
//                   Download PDF
//                 </a>
//               )}
//             </div>
//           </div>
//         )}

//         {resumePreviewUrl && form.resume?.type.startsWith("image/") && (
//           <div className="mt-4">
//             <p className="text-sm text-gray-300">Resume Preview:</p>
//             <img
//               src={resumePreviewUrl}
//               alt="Resume Preview"
//               className="border-2 border-purple-600 rounded-lg max-h-80 object-contain"
//             />
//             <div className="mt-2">
//               <button
//                 type="button"
//                 onClick={() => window.open(resumePreviewUrl, "_blank")}
//                 className="text-purple-400 hover:text-purple-300 text-sm"
//               >
//                 Open in new tab
//               </button>
//             </div>
//           </div>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Submitting..." : "Submit Application"}
//         </button>
//       </form>
//     </Modal>
//   );
// };