import axios from "axios";
// import { useAuth } from "../../context/AuthContext";
const API_URL = import.meta.env.VITE_API_URL;

export const postTask = async (taskData) => {
  const TOKEN = localStorage.getItem("authToken") || "";
    try {
        // const response = await axios.post(`${API_URL}/fetchUserDetails `, { email, password });
        // return response.data;
        try {
            if (!TOKEN) {
              throw new Error("No token found. Please log in.");
            }
    debugger
            const response = await axios.post(`${API_URL}/tasks`, taskData, {
                headers: {
                  Authorization:  `Bearer ${TOKEN}`, // Send token in headers
                },
              });
              return response.data; // Success response
          } catch (error) {
            console.error("Error postTask details:", error);
            // Redirect to login if token is invalid or expired
          }
        
    } catch (error) {
        const ex = error.response ? error.response.data : "Server error" + error;
        console.log(ex);
        const res = {type:'error', message: error.response ? error.response.data.message: ""}
        return error.response ? res : null
    }
};
