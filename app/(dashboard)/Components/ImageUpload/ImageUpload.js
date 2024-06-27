import React, { useState } from 'react';
import Image from 'next/image';
import { BiSolidCloudUpload } from 'react-icons/bi';

const ImageUpload = ({ onImageChange }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <label
        htmlFor="image"
        className="relative w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-primary/75 rounded-md cursor-pointer transition duration-300 ease-in-out transform"
      >
        {previewImage ? (
          <Image
            src={previewImage}
            alt="Uploaded Image"
            layout="fill"
            className="w-full h-full object-contain rounded-md"
          />
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <BiSolidCloudUpload className="text-3xl text-gray-500" />
            <span className="font-bold text-gray-600">Upload Image</span>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
