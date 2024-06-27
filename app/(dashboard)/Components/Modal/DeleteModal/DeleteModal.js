import CustomModal from "@/app/Components/Common/Modal/CustomModal";
import Button1 from "@/app/Components/Common/Buttons/Button1"; // Assuming you have a button component

const DeleteModal = ({ isOpen, close, id, refetch }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/projects/api`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
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

  const handleClose = () => {
    close(false);
  };

  return (
    <div>
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        <div className="p-6">
          <h1 className="text-xl font-bold text-center mb-4">
            Do you really want to delete?
          </h1>
          <p className="text-center text-gray-700 mb-6">
            ID: <span className="font-semibold">{id}</span>
          </p>
          <div className="w-1/2 mx-auto">
            <Button1
              title="Delete"
              subtitle="Confirm"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600"
            />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default DeleteModal;
