import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Delete images
export const deleteImages = async (data, successHandler, errorHandler) => {
  try {
    // Remove images from the cloud
    await axios.delete(`${API_URL}/${encodeURIComponent(data)}`);

    // Execute a callback
    successHandler();
  } catch (error) {
    errorHandler(error);
  }
};

// Fetch images
export const fetchImages = async (data, successHandler, errorHandler) => {
  try {
    // Fetch images from the cloud
    const response = await axios.get(API_URL, data);

    // Execute a callback
    successHandler(response);
  } catch (error) {
    errorHandler(error);
  }
};

// Upload images
export const uploadImages = async (data, successHandler, errorHandler) => {
  try {
    // Upload images to the cloud
    const response = await axios.post(API_URL, data);

    // Execute a callback
    successHandler(response);
  } catch (error) {
    errorHandler(error);
  }
};
