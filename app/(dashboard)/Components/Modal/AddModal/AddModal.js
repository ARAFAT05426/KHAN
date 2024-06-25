import CustomModal from "@/app/Components/Common/Modal/CustomModal";
import ReusableInputField from "@/app/Components/Common/Input/ReusableInputField";
import Button1 from "@/app/Components/Common/Buttons/Button1";

const AddModal = ({ isOpen, close }) => {
  const handleClose = () => {
    close(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isOpen === false) {
      return e.target.reset();
    }
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  };

  return (
    <div>
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-xl overflow-auto h-[80vh]">
          <h1 className="text-2xl font-extrabold text-center mb-6 text-gray-200">
            Add New Project
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <ReusableInputField title="Project Number" name="num" required />
            <ReusableInputField title="Category" name="category" required />
            <ReusableInputField title="Title" name="title" required />
            <ReusableInputField
              title="Description"
              name="description"
              required
            />
            <ReusableInputField title="Tech Stack" name="stack" required />
            <ReusableInputField title="Image URL" name="image" required />
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
            <ReusableInputField title="Features" name="features" required />
            <div className="col-span-2">
              <Button1 title={"Submit"} subtitle={"Add"} />
            </div>
          </form>
        </div>
      </CustomModal>
    </div>
  );
};

export default AddModal;
