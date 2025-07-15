import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://real-time-chatapp-46cu.onrender.com/api" : "/api",
  withCredentials: true,
});
