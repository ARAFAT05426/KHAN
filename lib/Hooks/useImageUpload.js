const useImageUpload = async (image) => {
  const imageApi = process.env.UPLOAD_IMAGE_API;
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=da5bd5866b96e21a5e6dd8114f3f009d",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.data.display_url;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export default useImageUpload;
