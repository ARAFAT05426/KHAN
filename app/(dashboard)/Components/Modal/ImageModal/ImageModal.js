"use client";
import { useState } from "react";
import CustomModal from "@/app/Components/Common/Modal/CustomModal";
import { BiSolidCloudUpload } from "react-icons/bi";
import Button1 from "@/app/Components/Common/Buttons/Button1";
import Image from "next/image";
import useImageUpload from "@/lib/Hooks/useImageUpload";
import useAvatar from "@/lib/Hooks/useAvatar";

const ImageModal = ({ isOpen, close }) => {
  const [img, setImg] = useState(null);
  const imageUpload = useImageUpload;
  const handleClose = () => {
    close(false);
    setImg(null);
  };
  const handleImageChange = (event) => {
    setImg(URL.createObjectURL(event?.target?.files[0]));
  };
  const { refetch } = useAvatar();
  const handleImageHost = async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    try {
      const imageUrl = await imageUpload(file);
      console.log(imageUrl);
      await handleImageUpload(imageUrl);
    } catch (error) {
      console.error("Failed to upload image:", error.message);
    }
  };
  const handleImageUpload = async (hostedURL) => {
    try {
      const res = await fetch("http://localhost:3000/dashboard/api", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hostedURL }),
      });
      await res.json();
      await refetch();
      await handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CustomModal isOpen={isOpen} onClose={handleClose}>
      <div className="flex flex-col p-5 space-y-4 max-w-md mx-auto rounded-lg shadow-xl h-fit">
        <form onSubmit={handleImageHost}>
          <input
            required
            onChange={handleImageChange}
            className="hidden"
            type="file"
            id="image"
            name="image"
            accept="image/*"
          />
          <label
            htmlFor="image"
            className="relative mb-2 w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-primary/75 rounded-md cursor-pointer transition duration-300 ease-in-out transform"
          >
            {img ? (
              <Image
                className="w-full h-full object-contain rounded-md"
                src={img}
                layout="fill"
                alt="Uploaded Image"
              />
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <BiSolidCloudUpload className="text-3xl text-gray-500" />
                <span className="font-bold text-gray-600">Upload Image</span>
              </div>
            )}
          </label>
          <Button1 title="Upload" subtitle="WoW" />
        </form>
      </div>
    </CustomModal>
  );
};

export default ImageModal;
