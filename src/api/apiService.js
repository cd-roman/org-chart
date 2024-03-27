// api/apiService.js
import axios from "axios";

const apiService = axios.create({
  baseURL: "/", // Set your base URL here if you have one
});

export default apiService;
