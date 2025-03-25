// const handleSubmit = async (form: any, e: React.FormEvent) => {
//   e.preventDefault();
//   if (!form.resume) {
//     console.log("No file selected");
//     return;
//   }
//   setLoading(true);
//   setUploadError(null); // Reset error on form submit

//   try {
//     const formData = new FormData();
//     formData.append("file", form.resume);
//     formData.append("upload_preset", "tanvir7462"); // Use your preset from Cloudinary
//     formData.append("cloud_name", "dsmbm1bvy"); // Replace with your Cloudinary cloud name

//     // Send request to Cloudinary
//     const response = await fetch(
//       "https://api.cloudinary.com/v1_1/dsmbm1bvy/image/upload", // Cloudinary API URL
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//     if (data.secure_url) {
//       const resumeUrl = data.secure_url;
//       console.log("Resume uploaded:", resumeUrl);

//       // Update form state with the uploaded file URL
//       setForm((prevForm) => ({ ...prevForm, resume: resumeUrl }));

//       // Handle form submission to your backend here (send the form data including the resume URL)
//       console.log("Form submitted:", { ...form, resume: resumeUrl });

//       // Close the modal
//       onClose();
//     } else {
//       setUploadError("Error uploading file to Cloudinary");
//       console.error("Error uploading file to Cloudinary");
//     }
//   } catch (error) {
//     setUploadError("Error uploading file");
//     console.error("Error uploading file:", error);
//   } finally {
//     setLoading(false);
//   }
// };
