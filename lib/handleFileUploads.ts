export const handleFileUploads = async (file: File) => {
    try {
      // Basic validation
      if (!file.type.includes('pdf')) {
        throw new Error('Only PDF files are accepted');
      }
  
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
      
      // For unsigned uploads - only allowed parameters
      formData.append('folder', 'user_resumes'); // Optional organization
      formData.append('tags', 'resume,application'); // Optional tagging
  
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      if (!cloudName) throw new Error('Cloudinary not configured');
  
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
  
      const data = await response.json();
      
      if (!response.ok || !data.secure_url) {
        console.error('Upload failed:', data);
        throw new Error(data.error?.message || 'Failed to get file URL');
      }
  
      // Return both the direct URL and a Google Docs viewer URL
      return {
        success: true,
        directUrl: data.secure_url,
        viewerUrl: `https://docs.google.com/viewer?url=${encodeURIComponent(data.secure_url)}&embedded=true`,
        public_id: data.public_id
      };
    } catch (error) {
      console.error('Upload error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Upload failed' 
      };
    }
  };