import axios from "axios";
// import { useAuth } from "../../context/AuthContext";
const API_URL = import.meta.env.VITE_API_URL;

export const updateTask = async (taskId, taskData) => {
  const TOKEN = localStorage.getItem("authToken") || "";
  try {
    const response = await axios.put(API_URL +"/updateTask/" + taskId, taskData, {
      headers: {
        Authorization: `Bearer ${TOKEN}`, // Send token in the header
      },
    });
    return response.data; // Return the updated task response
  } catch (error) {
    console.error("Error updating task:", error.response?.data || error.message);
    throw error;
  }
};
