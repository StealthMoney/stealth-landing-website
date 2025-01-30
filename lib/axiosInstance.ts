import axios from "axios";
import { baseUrl } from "@/config";

console.log("Axios Base URL:", baseUrl);

const axiosInstance = axios.create({
//   baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
