import { useState } from "react";
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
      const response = await fetch(
        "https://khan-delta.vercel.app/projects/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
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
        className="max-w-full mobile:max-w-xl tablet:max-w-2xl laptop:max-w-3xl mx-auto p-4 mobile:p-6 tablet:p-8 laptop:p-10 rounded-lg overflow-auto h-[80vh]"
      >
        <h1 className="text-lg mobile:text-xl laptop:text-2xl font-extrabold text-center mb-4 text-gray-200">
          Add New Project
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <ImageUpload onImageChange={setImageFile} />
          </div>
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField title="Project Number" name="num" required />
          </div>
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField title="Title" name="title" required />
          </div>
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField title="Category" name="category" required />
          </div>
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField
              title="Description"
              name="description"
              required
            />
          </div>
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField title="Tech Stack (,)" name="stack" required />
          </div>
          <ReusableInputField title="Live URL" name="live" />
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField title="GitHub URL" name="github" required />
          </div>
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField
              title="Start Date"
              name="startDate"
              required
              type="date"
            />
          </div>
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField
              title="End Date"
              name="endDate"
              required
              type="date"
            />
          </div>
          <div className="col-span-2 laptop:col-span-1">
            <ReusableInputField title="Challenges" name="challenges" required />
          </div>
          <div className="col-span-2">
            <ReusableInputField title="Features" name="features" required />
          </div>
          <div className="col-span-2">
            <Button1 title={"Submit"} subtitle={"Add"} />
          </div>
        </form>
      </div>
    </CustomModal>
  );
};

export default AddModal;
