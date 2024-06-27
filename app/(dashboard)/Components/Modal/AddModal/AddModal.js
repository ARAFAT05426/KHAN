import React, { useState } from "react";
import CustomModal from "@/app/Components/Common/Modal/CustomModal";
import ReusableInputField from "@/app/Components/Common/Input/ReusableInputField";
import Button1 from "@/app/Components/Common/Buttons/Button1";
import ImageUpload from "../../ImageUpload/ImageUpload";
import useImageUpload from "@/lib/Hooks/useImageUpload";

const AddModal = ({ isOpen, close, refetch }) => {
  const [imageFile, setImageFile] = useState(null);
  const uploadImage = useImageUpload;

  const handleClose = () => {
    close(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOpen) return;

    const formData = new FormData(e.target);
    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadImage(imageFile);
      console.log(imageUrl);
      formData.append("image", imageUrl); // Append the URL instead of the file
    }

    const data = {};
    formData.forEach((value, key) => {
      if (key === "stack") {
        data[key] = value.split(",").map((item) => item.trim());
      } else {
        data[key] = value;
      }
    });

    try {
      const response = await fetch("http://localhost:3000/projects/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await response.json();
      await refetch();
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose}>
      <div
        style={{ scrollbarWidth: "none" }}
        className="max-w-5xl mx-auto p-6 tablet:p-10 laptop:p-16 rounded-lg overflow-auto h-[80vh]"
      >
        <h1 className="text-xl laptop:text-2xl font-extrabold text-center mb-4 text-gray-200">
          Add New Project
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 laptop:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="col-span-2">
            <ImageUpload onImageChange={setImageFile} />
          </div>
          <ReusableInputField title="Project Number" name="num" required />
          <ReusableInputField title="Title" name="title" required />
          <ReusableInputField title="Category" name="category" required />
          <ReusableInputField title="Description" name="description" required />
          <ReusableInputField title="Tech Stack" name="stack" required />
          <ReusableInputField title="Live URL" name="live" />
          <ReusableInputField title="GitHub URL" name="github" required />
          <ReusableInputField
            title="Start Date"
            name="startDate"
            required
            type="date"
          />
          <ReusableInputField
            title="End Date"
            name="endDate"
            required
            type="date"
          />
          <ReusableInputField title="Challenges" name="challenges" required />
          <div className="col-span-2">
            <ReusableInputField title="Features" name="features" required />
          </div>
          <div className="col-span-1 laptop:col-span-2">
            <Button1 title={"Submit"} subtitle={"Add"} />
          </div>
        </form>
      </div>
    </CustomModal>
  );
};

export default AddModal;
