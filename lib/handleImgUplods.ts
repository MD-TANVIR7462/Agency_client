const handleUploads = async (file: any) => {
   const formData = new FormData();
   formData.append("file", file);
   formData.append("upload_preset", "tanvir7462");
   formData.append("cloud_name", "dsmbm1bvy");
   const response = await fetch(
      "https://api.cloudinary.com/v1_1/dsmbm1bvy/image/upload", // Cloudinary API URL
      {
         method: "POST",
         body: formData,
      }
   );

   const data = await response.json();
   return data
}
export default handleUploads