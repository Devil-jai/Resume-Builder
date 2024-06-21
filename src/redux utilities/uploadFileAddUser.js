import { addUser } from "./Template_1_slice";


export const uploadFileAndAddUser = (userData) => async (dispatch) => {
  const { image, ...rest } = userData;

  try {
    // Handle file upload here (e.g., upload to a server or cloud storage)
    const uploadResponse = await uploadFileToServer(image);

    // Extract relevant metadata after successful upload
    const imageMetadata = {
      name: image.name,
      size: image.size,
      type: image.type,
      url: uploadResponse.url // Assuming your server response includes a file URL
    };

    // Dispatch addUser with metadata
    dispatch(addUser({ ...rest, imageMetadata }));
  } catch (error) {
    console.error('File upload failed:', error);
  }
};

const uploadFileToServer = async (file) => {
  // Implement file upload logic here (e.g., using fetch or axios)
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('File upload failed');
  }

  return await response.json();
};
