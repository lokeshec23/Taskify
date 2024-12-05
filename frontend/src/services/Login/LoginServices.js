import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


// **Login API Call**
export const loginAPI = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        const ex = error.response ? error.response.data : "Server error" + error;
        console.log(ex);
        const res = {type:'error', message: error.response ? error.response.data.message: ""}
        return error.response ? res : null
    }
};
