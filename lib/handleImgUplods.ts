const handleUploads = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string);
  formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string);
  formData.append("folder", "Siscotek_Images"); // Optional organization

  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const response = await fetch(
    cloudinaryURL as string, // Cloudinary API URL
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data;
};
export default handleUploads;
