import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = 'http://localhost:5000/api'; // Backend URL

// **Signup API Call**
export const signup = async (formData) => {
 
  try {
    const { name, email, password } = formData;
    const response = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    const ex = error.response ? error.response.data : "Server error" + error;
    console.log(ex);
    const res = {type:'error', message: error.response ? error.response.data.message: ""}
    return error.response ? res : null
  }
};
