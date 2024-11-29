import axios from "axios";

export const imageUpload = async (image) => {
  if (!image || image === "null") {
    // Return a placeholder or null when no image is uploaded
    return null;
  }

  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );

  return data.data.display_url;
};
