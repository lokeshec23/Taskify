import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = 'http://localhost:5000/api'; // Backend URL

// **Signup API Call**
export const signup = async (formData) => {
  debugger;
  try {
    const { name, email, password } = formData;
    const response = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    let ex = error.response ? error.response.data : "Server error" + error;
    console.log(ex);
  }
};
