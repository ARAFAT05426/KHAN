"use client";
import { useState, useEffect } from "react";
import CustomModal from "@/app/Components/Common/Modal/CustomModal";
import ReusableInputField from "@/app/Components/Common/Input/ReusableInputField";
import Button1 from "@/app/Components/Common/Buttons/Button1";
import ImageUpload from "../../ImageUpload/ImageUpload";
import useImageUpload from "@/lib/Hooks/useImageUpload";

const UpdateModal = ({ isOpen, close, project, refetch }) => {
  const [formData, setFormData] = useState({
    num: "",
    title: "",
    category: "",
    description: "",
    image: "",
    stack: "",
    live: "",
    github: "",
    startDate: "",
    endDate: "",
    challenges: "",
    features: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const uploadImage = useImageUpload;

  useEffect(() => {
    if (project) {
      setFormData({
        num: project.num,
        title: project.title,
        category: project.category,
        description: project.description,
        image: project.image,
        stack: project.stack.join(", "),
        live: project.live,
        github: project.github,
        startDate: project.startDate,
        endDate: project.endDate,
        challenges: project.challenges,
        features: project.features,
      });
    }
  }, [project]);

  const handleClose = () => {
    close(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOpen || !project?._id) return;

    let imageUrl = formData.image;
    if (imageFile) {
      imageUrl = await uploadImage(imageFile);
    }

    const updatedData = {
      ...formData,
      image: imageUrl,
      stack: formData.stack.split(",").map((item) => item.trim()),
    };

    try {
      const response = await fetch(`https://khan-delta.vercel.app/projects/api`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: project._id, updateData: updatedData }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.success) {
        await refetch();
        handleClose();
      } else {
        console.error("Update failed:", result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose}>
      <div
        style={{ scrollbarWidth: "none" }}
        className="max-w-5xl mx-auto p-6 tablet:p-10 laptop:p-16 rounded-lg overflow-auto h-[80vh]"
      >
        <h1 className="text-xl laptop:text-2xl font-extrabold text-center mb-4 text-gray-200">
          Update Project
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 laptop:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="col-span-2">
            <ImageUpload
              onImageChange={setImageFile}
              initialImage={formData.image}
            />
          </div>
          <ReusableInputField
            title="Project Number"
            name="num"
            value={formData.num}
            onChange={handleChange}
            required
          />
          <ReusableInputField
            title="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <ReusableInputField
            title="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <ReusableInputField
            title="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <ReusableInputField
            title="Tech Stack"
            name="stack"
            value={formData.stack}
            onChange={handleChange}
            required
          />
          <ReusableInputField
            title="Live URL"
            name="live"
            value={formData.live}
            onChange={handleChange}
          />
          <ReusableInputField
            title="GitHub URL"
            name="github"
            value={formData.github}
            onChange={handleChange}
            required
          />
          <ReusableInputField
            title="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            type="date"
          />
          <ReusableInputField
            title="End Date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            type="date"
          />
          <ReusableInputField
            title="Challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            required
          />
          <div className="col-span-2">
            <ReusableInputField
              title="Features"
              name="features"
              value={formData.features}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1 laptop:col-span-2">
            <Button1 title={"Submit"} subtitle={"Update"} />
          </div>
        </form>
      </div>
    </CustomModal>
  );
};

export default UpdateModal;
