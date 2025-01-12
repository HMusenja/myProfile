import React, { useState } from "react";
import axios from "axios";

const ImageUploader = ({ onImageUrl }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  // Cloudinary config (these should ideally come from your environment variables)
  const cloudName = import.meta.env.VITE_CLOUD_NAME; 
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
  
  console.log("Cloud Name:", import.meta.env.VITE_CLOUD_NAME);
  console.log("Upload Preset:", import.meta.env.VITE_UPLOAD_PRESET);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!image) {
      setError("No image selected.");
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      // Get the image URL from the response
      const imageUrl = response.data.secure_url;
console.log(imageUrl)
      // Pass the image URL to the parent component (Manage.jsx)
      onImageUrl(imageUrl);

      setUploading(false);
      setImage(null); // Reset image selection
    } catch (err) {
      setError("Failed to upload image. Please try again.");
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button
        onClick={handleImageUpload}
        disabled={uploading || !image}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            
          >
            
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ImageUploader;
