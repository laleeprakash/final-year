import React, { useState } from 'react';

const ImageUploader = () => {
  // State to track the selected file and upload status
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Handle image file selection
  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      setUploadSuccess(false); // Reset success state
      setUploadError(''); // Reset error state
    }
  };

  // Handle image upload to the server
  const handleUpload = async () => {
    if (!image) {
      setUploadError('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', image); // 'image' is the field name that the backend expects

    try {
      setUploading(true); // Set uploading state to true while upload is in progress
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData, // Send the FormData with the image
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const result = await response.json(); // Parse response JSON
      setUploadSuccess(true);
      setUploading(false);
      console.log('Upload success:', result);
    } catch (error) {
      setUploadError(error.message);
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>

      {/* Image selection input */}
      <input
        type="file"
        accept="image/*" // Only image files
        onChange={handleFileChange}
      />

      {/* Show image preview */}
      {image && <img src={URL.createObjectURL(image)} alt="Preview" width="200" />}

      {/* Upload button */}
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>

      {/* Success or error messages */}
      {uploadSuccess && <p>Image uploaded successfully!</p>}
      {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
    </div>
  );
};

export default ImageUploader;
  