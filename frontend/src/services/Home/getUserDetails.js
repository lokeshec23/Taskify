import axios from "axios";
// import { useAuth } from "../../context/AuthContext";
const API_URL = import.meta.env.VITE_API_URL;

export const fetchUserDetails = async (email, password) => {
  const TOKEN = localStorage.getItem("authToken") || "";
  // const  {TOKEN} = useAuth()
  console.log("Token client", TOKEN)
    try {
        // const response = await axios.post(`${API_URL}/fetchUserDetails `, { email, password });
        // return response.data;
        try {
            if (!TOKEN) {
              throw new Error("No token found. Please log in.");
            }
    
            const response = await axios.get(`${API_URL}/fetchUserDetails `, {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            });
    
            return response.data.name;
          } catch (error) {
            console.error("Error fetching user details:", error);
            // Redirect to login if token is invalid or expired
          }
        
    } catch (error) {
        const ex = error.response ? error.response.data : "Server error" + error;
        console.log(ex);
        const res = {type:'error', message: error.response ? error.response.data.message: ""}
        return error.response ? res : null
    }
};
