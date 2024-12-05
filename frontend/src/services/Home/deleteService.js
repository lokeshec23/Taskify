import axios from "axios";
// import { useAuth } from "../../context/AuthContext";
const API_URL = import.meta.env.VITE_API_URL;

export const deleteTask  = async (taskId, taskData) => {
  const TOKEN = localStorage.getItem("authToken") || "";
  try {
    const response = await axios.delete(API_URL+ "/deleteTask/" + taskId, {
      headers: {
        Authorization: `Bearer ${TOKEN}`, // Send token in the header
      },
    });
    return response.data; // Return success message
  } catch (error) {
    console.error("Error deleting task:", error.response?.data || error.message);
    throw error;
  }
};
