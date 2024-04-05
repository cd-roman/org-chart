import axios from "axios";
import { setupMock } from "./mock";

const apiService = axios.create({
  baseURL: "/", // Set your base URL here if you have one
});

setupMock(apiService);

export default apiService;
