"use client";
import Button1 from "@/app/Components/Common/Buttons/Button1";
import CustomModal from "@/app/Components/Common/Modal/CustomModal";
import Image from "next/image";
import { useState } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";

const ImageModal = ({ isOpen, close }) => {
  const [img, setImg] = useState(null);

  const handleClose = () => {
    close(false);
    setImg(null);
  };

  return (
    <div>
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        <div className="flex flex-col p-5 space-y-4 max-w-md mx-auto rounded-lg shadow-xl h-fit">
          <input
            required
            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
            className="hidden"
            type="file"
            id="image"
            name="image"
            accept="image/*"
          />
          <label
            htmlFor="image"
            className="relative mb-2 w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-primary/75 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:shadow-md"
          >
            {img ? (
              <Image
                className="w-full object-contain rounded-md py-1"
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
          <Button1 title={"Upload"} subtitle={"WoW"} />
        </div>
      </CustomModal>
    </div>
  );
};

export default ImageModal;
